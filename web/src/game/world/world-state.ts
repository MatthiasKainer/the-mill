import { Hormone, hypothalamus, releaseHormone } from "organismus";
import { PlayerAsset } from ".";
import { buildings } from "../../assets";
import {assets} from "../../assets/assetsConsts"
import { Cube } from "../../math/cube/cube";
import { isReachable, shortestPath } from "../../math/pathfinder/a";
import { Position, SimpleCoordsEquals } from "../../math/position";
import { MoveModeActivate, HexagonUpdated, KnightCreated, MoveModeTargetHovered, MoveModeData, MoveModeEnd, MoveModeDeactivate, ItemMoved, BattleStarted, MillTakeover, ModalBattleOpen, BattleThrowDice, BattlePlayerAttacked, ModalDiceResultOpen, TurnStarted, TurnsComplete, TurnPlayerComplete, TurnAccepted, RequestSelectCoords, ItemSelected, BattleModeData, BattleModeActivate, BattleModeActive, BattleModeDeactivate, BattleModeEnd, CheckPlayerHasActionsLeft, PlayerNoActionsLeft, AssetTaken, UpdateAllPlayerElements, Abort, PlayerUpdate, WagonCreated, DistributeResources, ResourcesGenerated, ResourceGenerationComplete, ResourceSummary, BuildLumberjackSmall, BuildLumberjackSmallFailed, BuildLumberjackSmallSuccess, UpdatedResources, RequestUpdatedResources, MoveModeActivated, BuildMineSmall, BuildMineSmallFailed, BuildMineSmallSuccess, LumberjackTakeover, MineTakeover, ActionPerformed, AssetCreated, BuildWithWagon, BuildFailed } from "./events";
import { SidebarLoaded, StartGame, Tile, World, WorldLoaded } from "./worldLoader";
import { roll } from "../player/dices";
import { CreateKnight, costs as knightCosts, NewKnight } from "../player/knights/Knight";
import { Asset, isActionableAsset, isFighterAsset, isFightingAsset, isMoveableAsset, isPositionedAsset, isResourceGeneratingAsset, MoveableAsset, Players, PositionedTeamAsset, ResourceGeneratingBuilding, ResourceGeneratingSprite, Resources, Team, teams } from "./types";
import { findNextPlayerWithAction, TurnComplete } from "../player/Assets";
import { findAllElementsFromTeam } from "./navigator";
import { deepQuerySelector } from "../../browser/Selector";
import { CreateWagon, costs as wagonCosts, NewWagon } from "../player/wagon/Wagon";
import { generateResources, getResourceGeneratingBuildings } from "./buildings";
import { CreateSmallLumberjack } from "../player/buildings/Lumberjack";
import { isTerrain } from "../player/resources";
import { CreateSmallMine } from "../player/buildings/Mine";

let world: World = {} as any as World
let worldAsCube: Cube[] = []

let currentTurn: Team
let turns: Team[] = []

let players: Players = {} as any as Players

export const getCurrentWorld = () => ({ ...world });
export const getCurrentTeam = () => currentTurn;
export const setCurrentTeam = (team: Team) => currentTurn = team;
export const getPlayer = (team: Team) => ({ ...players[team] })
export const getActivePlayer = () => players[currentTurn]
const hasActionsLeft = (asset: MoveableAsset) => asset.actions.current > 0;
const isOnTurn = ({ team }: { team: Team | undefined }) => team === currentTurn;

hypothalamus.on(WorldLoaded, async (newWorld) => {
    worldAsCube = []
    newWorld.map.forEach((row, rowIndex) => {
        row.forEach((_, colIndex) => {
            const cube = new Position(rowIndex, colIndex).toCube()
            if (_.terrain.movementCosts) {
                cube.costs = _.terrain.movementCosts
            }
            worldAsCube.push(cube)
        })
    })
    world = newWorld;
    teams().forEach(team => {
        players[team] = {
            resources: {
                hay: 100,
                grain: 200,
                iron: 200,
                wood: 100,
                stone: 100
            }
        }
    })
    await releaseHormone(StartGame)
})

hypothalamus.on(Abort, async (abort) => {
    if (!abort) return;
    releaseHormone(MoveModeDeactivate)
    releaseHormone(BattleModeDeactivate)
})

hypothalamus.on([StartGame, SidebarLoaded], async () => {
    await releaseHormone(TurnStarted)
})

hypothalamus.on(TurnStarted, async () => {
    turns = [...world.teams]
    currentTurn = turns.pop()!
    await releaseHormone(TurnAccepted, currentTurn)
})

export function allocateResources(initialResources: Resources, resourcesToGenerate: ResourceGeneratingBuilding[]) {
    let availableResources: any = { ...initialResources };
    let resourceGeneratingBuildings: ResourceGeneratingBuilding[] = [...resourcesToGenerate];
    let touched = true;

    while (touched) {
        touched = false;
        resourceGeneratingBuildings = resourceGeneratingBuildings.map((resourceGeneratingBuilding) => {
            let result: ResourceGeneratingBuilding | undefined = resourceGeneratingBuilding;
            Object.entries(resourceGeneratingBuilding.resources).forEach(([source, { generatedResource, ...costs }]) => {
                if (Object.entries(costs).every(([resource, cost]) => availableResources[resource] <= cost)) {
                    touched = true;
                    result = undefined;
                    Object.entries(costs).forEach(([resource, cost]) => {
                        availableResources[resource] -= cost;
                    })
                    availableResources[source] += generatedResource;
                    releaseHormone(ResourcesGenerated, resourceGeneratingBuilding);
                }
            })
            return result;
        }).filter(Boolean)
    }
    return availableResources
}

hypothalamus.on(DistributeResources, async ({ team, resourcesToGenerate }: DistributeResources) => {
    if (getPlayer(team)?.resources) {
        const before = { ...getPlayer(team).resources };
        players[team].resources = allocateResources(players[team].resources, resourcesToGenerate);
        releaseHormone(ResourceGenerationComplete, { team, before, after: players[team].resources });
        await releaseHormone(UpdatedResources, { team, resourcesToGenerate });
    }
    
})

hypothalamus.collect(ResourcesGenerated, ResourceGenerationComplete, (values) => {
    releaseHormone(ResourceSummary, (values[ResourcesGenerated.name] as ResourceGeneratingBuilding[])?.map(generator => {
        return {
            name: generator.name,
            from: Object.values(generator.resources).map(({ generatedResource, ...costs }) => ({ ...costs })),
            to: Object.keys(generator.resources)
        }
    }));
})

hypothalamus.on(TurnAccepted, async (team) => {
    const playerAssets = findAllElementsFromTeam(world, team)
    await releaseHormone(UpdateAllPlayerElements, playerAssets)

    const playerCastle = playerAssets?.find(element => element.name === buildings.castleSmall.name)
    if (isPositionedAsset(playerCastle)) {
        releaseHormone(RequestSelectCoords, {
            item: buildings.castleSmall.name,
            row: playerCastle.row,
            col: playerCastle.col,
            payload: playerCastle,
        })
    }
    setTimeout(() => {
        deepQuerySelector(playerCastle)?.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
    }, 2)

    // refill all resources and movements
    const resourceMap: ResourceGeneratingBuilding[] =
        getResourceGeneratingBuildings(world, team)
            .reduce((into, building) => [...into, ...generateResources(building)], [] as ResourceGeneratingBuilding[])
            .filter((building, index, self) => self.indexOf(building) === index)
    // distribute resources
    await releaseHormone(DistributeResources, { team, resourcesToGenerate: resourceMap });

    await releaseHormone(PlayerUpdate, getPlayer(team))
})


hypothalamus.on(RequestUpdatedResources, ({ team }) => {
    // refill all resources and movements
    const resourceMap: ResourceGeneratingBuilding[] =
        getResourceGeneratingBuildings(world, team)?.reduce((into, building) => [...into, ...generateResources(building)], [] as ResourceGeneratingBuilding[])
    // distribute resources
    releaseHormone(UpdatedResources, { team, resourcesToGenerate: resourceMap });
})

hypothalamus.on(RequestSelectCoords, async (data) => {
    await releaseHormone(ItemSelected, { ...data, item: "hexagon" })
    await releaseHormone(ItemSelected, { ...data })
    await releaseHormone(ItemSelected, { ...data, item: "hexagon" })
})

hypothalamus.on(TurnPlayerComplete, () => {
    currentTurn = turns.pop()!
    if (currentTurn === undefined) {
        releaseHormone(TurnsComplete)
    } else {
        releaseHormone(TurnAccepted, currentTurn)
    }
})

hypothalamus.on(TurnsComplete, () => {
    // refill all movements
    world.map.forEach((row) => {
        row.forEach(({ elements }) => {
            // For moveable assets, reset their movement
            TurnComplete(...elements
                .filter(isMoveableAsset)
            )
        })
    })
    releaseHormone(TurnStarted)
})

const tryPay = (team: Team, costs: Resources): boolean => {
    const availableResources: any = { ...players[team].resources };
    for (const [resource, cost] of Object.entries(costs)) {
        if (availableResources[resource] < cost) {
            return false;
        }
        availableResources[resource] -= cost
    }

    players[team].resources = availableResources
    return true;
}

type BuildBundle<T> = {
    name: string,
    hormone: Hormone<AssetCreated>,
    costs: Resources,
    create: (asset: PositionedTeamAsset) => T,
}
const knightBuild: BuildBundle<NewKnight> = {
    name: assets.knight,
    hormone: KnightCreated,
    costs: knightCosts(),
    create: CreateKnight,
}
const wagonBuild: BuildBundle<NewWagon> = {
    name: assets.wagon,
    hormone: WagonCreated,
    costs: wagonCosts(),
    create: CreateWagon,
};

([knightBuild, wagonBuild]).forEach(({ name, hormone, costs, create }) => {
    hypothalamus.on(hormone, async ({ row, col, team, origin }) => {
        if (!isOnTurn({ team })) return;
        if (!tryPay(team, costs)) return;
        if (origin.actions.current < 1) return;
        const asset = create({ row, col, team })
        world.map[row][col].elements.push(asset)
        
        await Promise.all([
            releaseHormone(ActionPerformed, { item: origin }),
            releaseHormone(HexagonUpdated, { row, col, elements: [...world.map[row][col].elements] }),
            releaseHormone(UpdateAllPlayerElements, findAllElementsFromTeam(world, team)),
            releaseHormone(PlayerUpdate, getActivePlayer()),
        ])
    
        releaseHormone(RequestSelectCoords, {
            item: name,
            row, col,
            payload: asset,
        })
    })
})

hypothalamus.on(ActionPerformed, ({item}) => {
    world.map[item.row][item.col].elements
        .filter(element => element.id === item.id)
        .filter(isActionableAsset)
        .forEach(element => element.actions.current--)
})

hypothalamus.on(CheckPlayerHasActionsLeft, () => {
    const playerWithActionsLeft = findNextPlayerWithAction(world, currentTurn)

    if (playerWithActionsLeft === undefined) {
        releaseHormone(PlayerNoActionsLeft, true)
    }
})

type WagonBuildEvent = {
    name: string,
    hormone: Hormone<BuildWithWagon>,
    allowedTerrain: string,
    create: (asset: PositionedTeamAsset) => ResourceGeneratingSprite,
    success: Hormone<BuildWithWagon>,
    failed: Hormone<BuildFailed>,
}
const buildLumberjackSmall: WagonBuildEvent = {
    name: assets.lumberjack.small,
    hormone: BuildLumberjackSmall,
    allowedTerrain: "forest",
    create: CreateSmallLumberjack,
    success: BuildLumberjackSmallSuccess,
    failed: BuildLumberjackSmallFailed,
};
const buildMineSmall: WagonBuildEvent = {
    name: assets.lumberjack.small,
    hormone: BuildMineSmall,
    allowedTerrain: "mountain",
    create: CreateSmallMine,
    success: BuildMineSmallSuccess,
    failed: BuildMineSmallFailed,
};

([buildLumberjackSmall, buildMineSmall]).forEach(({ hormone, allowedTerrain, create, success, failed }) => {
    hypothalamus.on(hormone, async ({ position, asset }) => {
        const { elements, terrain } = world.map[position.row][position.col]
        const { team } = asset
        const firstWagonIndex = elements.findIndex(element => element.name === "player-wagon")
        if (!isOnTurn({ team: asset.team })) await releaseHormone(failed, { position, asset, reason: `Not the turn of the team ${asset.team}` });
        else if (asset.name !== "player-wagon" || firstWagonIndex < 0) await releaseHormone(failed, { position, asset, reason: "No wagon on field" });
        else if (!isTerrain(terrain, allowedTerrain as any)) await releaseHormone(failed, { position, asset, reason: `No ${allowedTerrain} on field but ${terrain.sprite.name}` });
        else if (elements.some(isResourceGeneratingAsset)) await releaseHormone(failed, { position, asset, reason: "There is already a building on the field" });
        else {
            const newAsset = create({ ...position, team: asset.team! })
            elements.splice(firstWagonIndex, 1)
            elements.unshift(newAsset)
            await Promise.all([
                releaseHormone(HexagonUpdated, {
                    ...position,
                    elements: [
                        ...elements
                    ]
                }),
                releaseHormone(UpdateAllPlayerElements, findAllElementsFromTeam(world, asset.team!)),
                releaseHormone(PlayerUpdate, getActivePlayer()),
                releaseHormone(success, { position, asset: newAsset })
            ])
            // notify whoever interested in the resource creation that it was created
            releaseHormone(RequestUpdatedResources, { team })
        }
    })
})

const safeNumber = (n: number) => {
    return Number.parseInt(n.toString(), 10)
}
const isBlocked = (cube: Cube) => {
    const { row, col } = cube.toCoords()
    const sameTeam = (element: Asset) => element.team !== moveModeState?.asset.name
    return world.map[row][col].elements
        .filter(sameTeam)
        .some(isFightingAsset)
}

let moveModeState: MoveModeData | undefined = undefined
hypothalamus.on(MoveModeActivate, async data => {
    if (battleModeState) {
        await releaseHormone(BattleModeDeactivate)
    }
    if (!isOnTurn(data.asset)) return;
    // calculate reachable tiles
    function isInReach(hexagon: Tile): boolean {
        const start = new Position(safeNumber(data.start.row), safeNumber(data.start.col)).toCube()
        const end = new Position(safeNumber(hexagon.position.row), safeNumber(hexagon.position.col)).toCube()

        return isReachable(start, end, worldAsCube, isBlocked, data.asset.movement.points)
    }

    moveModeState = {
        ...data,
        inReach: world.map.reduce((acc, row) =>
            [...acc, ...row.filter(isInReach).map(tile => tile!.position)]
            , [] as Position[])
    }
    await releaseHormone(MoveModeActivated, data)
})
hypothalamus.on(MoveModeDeactivate, () => {
    moveModeState = undefined
})
hypothalamus.on(MoveModeTargetHovered, async data => {
    if (!moveModeState) {
        return
    }

    const start = new Position(safeNumber(moveModeState.start.row), safeNumber(moveModeState.start.col)).toCube()
    const end = new Position(safeNumber(data.row), safeNumber(data.col)).toCube()

    const trail = shortestPath(start, end, worldAsCube, isBlocked, moveModeState.asset.movement.points)
        .path;
    let actualEnd = data
    if (isBlocked(end)) {
        actualEnd = [...trail].pop()?.toCoords() ?? moveModeState.start
    }

    await releaseHormone(MoveModeActivate, { ...moveModeState, trail, end: actualEnd })
})
hypothalamus.on(MoveModeEnd, async data => {
    if (!moveModeState) {
        return
    }
    if ((moveModeState.trail?.length ?? 0) < 1) {
        return;
    }

    const { start, asset } = moveModeState;
    if (!isOnTurn(asset)) { return }
    if (asset.actions === undefined) console.error("asset.actions undefined", asset)
    if (!hasActionsLeft(asset)) { return; }
    if (SimpleCoordsEquals(moveModeState.start, data)) {
        releaseHormone(MoveModeDeactivate)
        return;
    }
    asset.actions.current -= 1
    const elements = [...world.map[start.row][start.col].elements];
    world.map[start.row][start.col].elements = []
    elements.forEach((element) => {
        if (element.id !== asset.id)
            world.map[start.row][start.col].elements.push({ ...element, row: start.row, col: start.col } as Asset)
        else {
            world.map[data.row][data.col].elements.push({ ...element, row: data.row, col: data.col } as Asset)
        }
    })
    await releaseHormone(HexagonUpdated, { row: start.row, col: start.col, elements: [...world.map[start.row][start.col].elements] })
    await releaseHormone(HexagonUpdated, { row: data.row, col: data.col, elements: [...world.map[data.row][data.col].elements] })
    await releaseHormone(MoveModeDeactivate)
    await releaseHormone(ItemMoved, { asset, location: data })
    await releaseHormone(CheckPlayerHasActionsLeft)
})

let battleModeState: BattleModeData | undefined = undefined
hypothalamus.on(BattleModeActivate, async data => {
    if (!isOnTurn(data.asset)) return;
    if (moveModeState) {
        await releaseHormone(MoveModeDeactivate)
    }
    battleModeState = {
        ...data,
        range: new Position(data.start.row, data.start.col)
            .toCube()
            .range(1)
            .map(c => c.toPosition().toCoords())
    }
    releaseHormone(BattleModeActive, battleModeState)
})
hypothalamus.on(BattleModeEnd, async data => {
    if (!battleModeState || !isOnTurn(battleModeState.asset)) return;
    if (SimpleCoordsEquals(battleModeState.start, data)) {
        releaseHormone(BattleModeDeactivate)
        return;
    }
    const { row, col } = data
    const { asset } = battleModeState;
    const otherKnights = [...world.map[row][col].elements]
        .filter(item => isFighterAsset(item) && (item as PlayerAsset).team !== asset.team)
    if (hasActionsLeft(asset) && otherKnights.length > 0) {
        asset.actions.current -= 1;
        await releaseHormone(BattleStarted, {
            location: data,
            attacker: [asset],
            defender: [...otherKnights]
        })
    }
    releaseHormone(UpdateAllPlayerElements, findAllElementsFromTeam(world, asset.team))
    releaseHormone(BattleModeDeactivate)
    await releaseHormone(CheckPlayerHasActionsLeft)
})
hypothalamus.on(BattleModeDeactivate, () => battleModeState = undefined)

hypothalamus.on(ItemMoved, async ({ asset, location }) => {
    if (!isOnTurn(asset)) { return }
    const { row, col } = location;
    const otherElements = [...world.map[row][col].elements]
        .filter(item => item.id !== asset.id);
    for (const { building, hormone } of [
        { building: buildings.mill.name, hormone: MillTakeover },
        { building: buildings.lumberjackSmall.name, hormone: LumberjackTakeover },
        { building: buildings.mineSmall.name, hormone: MineTakeover },
    ]) {
        const assetToTake = otherElements
            .filter(item => item.name === building && (item as PlayerAsset).team !== asset.team)
        if (assetToTake.length > 0 && isFighterAsset(asset)) {
            const assetTaken: AssetTaken = {
                asset: assetToTake[0],
                transfered: {
                    from: assetToTake[0].team!,
                    to: asset.team
                },
                location,
                by: asset,
                team: asset.team
            }
            await releaseHormone(hormone, assetTaken)
        }
    }
    releaseHormone(UpdateAllPlayerElements, findAllElementsFromTeam(world, asset.team))
    await releaseHormone(CheckPlayerHasActionsLeft)
});

([MillTakeover, LumberjackTakeover, MineTakeover]).forEach(hormone => {
    hypothalamus.on(hormone, ({ location, team, asset }) => {
        if (!isOnTurn({ team })) { return }
        const { row, col } = location
        const elements = [...world.map[row][col].elements];
        world.map[row][col].elements = []
        elements.forEach((element) => {
            if (element.id !== asset.id) {
                world.map[row][col].elements.push(element)
            } else {
                world.map[row][col].elements.push({ ...element, team } as PlayerAsset)
            }
        })
        releaseHormone(UpdateAllPlayerElements, findAllElementsFromTeam(world, team))
        releaseHormone(RequestUpdatedResources, { team })
    })
})

hypothalamus.on(BattleStarted, (data) => {
    releaseHormone(ModalBattleOpen, data)
})

hypothalamus.on(BattleThrowDice, (data) => {
    if (!isOnTurn(data.attacker.asset)) { return }
    const damage = roll(data.attacker.dices)
    releaseHormone(BattlePlayerAttacked, {
        attacker: data.attacker.asset,
        defender: data.defender,
        damage,
        location: data.location
    })
})

hypothalamus.on(BattlePlayerAttacked, (data) => {
    const { defender, damage, attacker } = data
    const attacker_after = {
        ...attacker,
        health: {
            ...attacker.health,
            current: (damage < 0) ? attacker.health.current + damage : attacker.health.current
        }
    }
    const defender_after = {
        ...defender, health: {
            ...defender.health,
            current: (damage > 0) ? defender.health.current - damage : defender.health.current
        }
    }

    const { row, col } = data.location
    const elements = [...world.map[row][col].elements];
    world.map[row][col].elements = []
    elements.forEach((element) => {
        if (element.id === defender_after.id) {
            if (defender_after.health.current > 0) {
                world.map[row][col].elements.push(defender_after)
            }
        } else if (element.id === attacker_after.id) {
            if (attacker_after.health.current > 0) {
                world.map[row][col].elements.push(attacker_after)
            }
        } else {
            world.map[row][col].elements.push(element)
        }
    })
    releaseHormone(HexagonUpdated, { row, col, elements: [...world.map[row][col].elements] })
    releaseHormone(ModalBattleOpen, undefined)
    releaseHormone(ModalDiceResultOpen, {
        attacker: [attacker],
        defender: [defender],
        defender_after: [defender_after],
        attacker_after: [attacker_after],
        location: data.location,
        result: damage
    })
})
