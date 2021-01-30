import { hypothalamus, releaseHormone } from "organismus";
import { PlayerAsset } from ".";
import { buildings } from "../../assets";
import { Cube } from "../../math/cube/cube";
import { shortestPath } from "../../math/pathfinder/a";
import { Position, SimpleCoordsEquals } from "../../math/position";
import { MoveModeActivate, HexagonUpdated, KnightCreated, MoveModeTargetHovered, MoveModeData, MoveModeEnd, MoveModeDeactivate, ItemMoved, BattleStarted, MillTakeover, ModalBattleOpen, BattleThrowDice, BattlePlayerAttacked, ModalDiceResultOpen, TurnStarted, TurnsComplete, TurnPlayerComplete, TurnAccepted, RequestSelectCoords, ItemSelected, BattleModeData, BattleModeActivate, BattleModeActive, BattleModeDeactivate, BattleModeEnd, CheckPlayerHasActionsLeft, PlayerNoActionsLeft, MillTaken, UpdateAllPlayerElements, Abort, PlayerUpdate, WagonCreated } from "./events";
import { SidebarLoaded, StartGame, World, WorldLoaded } from "./worldLoader";
import { roll } from "../player/dices";
import { CreateKnight, findNextPlayerWithAction, costs as knightCosts } from "../player/knights/Knight";
import { Asset, isFighterAsset, isMoveableAsset, isPositionedAsset, MoveableAsset, Players, Resources, Team, teams } from "./types";
import { TurnComplete } from "../player/Assets";
import { findAllElementsFromTeam } from "./navigator";
import { deepQuerySelector } from "../../browser/Selector";
import { CreateWagon,costs as wagonCosts } from "../player/wagon/Wagon";

let world: World = {} as any as World
let worldAsCube: Cube[] = []

let currentTurn: Team
let turns: Team[] = []

let players: Players = {} as any as Players

export const getCurrentWorld = () => ({ ...world });
export const getCurrentTeam = () => currentTurn;
export const setCurrentTeam = (team: Team) => currentTurn = team;
export const getPlayer = (team: Team) => ({...players[team]})
export const getActivePlayer = () => players[currentTurn]
const hasActionsLeft = (asset: MoveableAsset) => asset.actions.current > 0;
const isOnTurn = ({ team }: { team: Team }) => team === currentTurn;

hypothalamus.on(WorldLoaded, (newWorld) => {
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
                log: 100,
                stone: 100
            }
        }
    })
    releaseHormone(StartGame)
})

hypothalamus.on(Abort, async (abort) => {
    if (!abort) return;
    releaseHormone(MoveModeDeactivate)
    releaseHormone(BattleModeDeactivate)
})

hypothalamus.on([StartGame, SidebarLoaded], () => {
    releaseHormone(TurnStarted)
})

hypothalamus.on(TurnStarted, () => {
    turns = [...world.teams]
    currentTurn = turns.pop()!
    releaseHormone(TurnAccepted, currentTurn)
})

hypothalamus.on(TurnAccepted, team => {
    const playerAssets = findAllElementsFromTeam(world, team)
    releaseHormone(UpdateAllPlayerElements, playerAssets)
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

    releaseHormone(PlayerUpdate, getPlayer(team))
})

hypothalamus.on(RequestSelectCoords, async (data) => {
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
    world.map.forEach((row) => {
        row.forEach(({ elements }) => {
            TurnComplete(...elements
                .filter(isMoveableAsset)
            )
        })
    })
    releaseHormone(TurnStarted)
})

const tryPay = (team: Team, costs: Resources): boolean => {
    const availableResources: any = {...players[team].resources};
    for (const [resource, cost] of Object.entries(costs)) {
        if (availableResources[resource] < cost) {
            return false;
        }
        availableResources[resource] -= cost
    }
    
    players[team].resources = availableResources
    return true;
}

hypothalamus.on(KnightCreated, ({ row, col, team }) => {
    if (!isOnTurn({ team })) return;
    if (!tryPay(team, knightCosts())) return;
    const knight = CreateKnight({ row, col, team })
    world.map[row][col].elements.push(knight)
    releaseHormone(HexagonUpdated, { row, col, elements: [...world.map[row][col].elements] })
    releaseHormone(UpdateAllPlayerElements, findAllElementsFromTeam(world, team))
    releaseHormone(PlayerUpdate, getActivePlayer())
})
hypothalamus.on(WagonCreated, ({ row, col, team }) => {
    if (!isOnTurn({ team })) return;
    if (!tryPay(team, wagonCosts())) return;
    const wagon = CreateWagon({ row, col, team })
    world.map[row][col].elements.push(wagon)
    releaseHormone(HexagonUpdated, { row, col, elements: [...world.map[row][col].elements] })
    releaseHormone(UpdateAllPlayerElements, findAllElementsFromTeam(world, team))
    releaseHormone(PlayerUpdate, getActivePlayer())
})

hypothalamus.on(CheckPlayerHasActionsLeft, () => {
    const playerWithActionsLeft = findNextPlayerWithAction(world, currentTurn)

    if (playerWithActionsLeft === undefined) {
        releaseHormone(PlayerNoActionsLeft, true)
    }
})

const safeNumber = (n: number) => {
    return Number.parseInt(n.toString(), 10)
}

let moveModeState: MoveModeData | undefined = undefined
hypothalamus.on(MoveModeActivate, async data => {
    if (battleModeState) {
        await releaseHormone(BattleModeDeactivate)
    }
    if (!isOnTurn(data.asset)) return;
    moveModeState = data
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
    const isBlocked = (cube: Cube) => {
        const { row, col } = cube.toCoords()
        return world.map[row][col].elements
            .filter(element => element.team !== moveModeState?.asset.name)
            .some((element) => isFighterAsset(element))
    }

    const trail = shortestPath(start, end, worldAsCube, isBlocked, moveModeState.asset.movement.points)
        .path;
    let actualEnd = data
    if (isBlocked(end)) {
        actualEnd = [...trail].pop()?.toCoords() ?? moveModeState.start
    }
    console.log("MoveModeTargetHovered", { ...moveModeState, trail, end: actualEnd })

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
    const mills = otherElements
        .filter(item => item.name === buildings.mill.name && (item as PlayerAsset).team !== asset.team)
    if (mills.length > 0 && isFighterAsset(asset)) {
        const millTaken: MillTaken = {
            asset: mills[0],
            transfered: {
                from: mills[0].team!,
                to: asset.team
            },
            location,
            by: asset,
            team: asset.team
        }
        await releaseHormone(MillTakeover, millTaken)
        return
    }
    releaseHormone(UpdateAllPlayerElements, findAllElementsFromTeam(world, asset.team))
    await releaseHormone(CheckPlayerHasActionsLeft)
})

hypothalamus.on(MillTakeover, ({ location, team, asset }) => {
    if (!isOnTurn({ team })) { return }
    const { row, col } = location
    const elements = [...world.map[row][col].elements];
    world.map[row][col].elements = []
    elements.forEach((element) => {
        if (element.id !== asset.id)
            world.map[row][col].elements.push(element)
        else {
            world.map[row][col].elements.push({ ...element, team } as PlayerAsset)
        }
    })
    releaseHormone(UpdateAllPlayerElements, findAllElementsFromTeam(world, team))
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
    if (damage < 0) {
        attacker.health.current += damage
    } else {
        defender.health.current -= damage
    }
    const { row, col } = data.location
    const elements = [...world.map[row][col].elements];
    world.map[row][col].elements = []
    elements.forEach((element) => {
        if (element.id === defender.id) {
            if (defender.health.current > 0) {
                world.map[row][col].elements.push(defender)
            }
        } else if (element.id === attacker.id) {
            if (attacker.health.current > 0) {
                world.map[row][col].elements.push(attacker)
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
        location: data.location,
        result: damage
    })
})