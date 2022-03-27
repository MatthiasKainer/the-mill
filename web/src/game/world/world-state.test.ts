import { hypothalamus, releaseHormone } from "organismus";
import { Asset, getCurrentWorld } from ".";
import { range } from "../../arrays";
import { buildings, player } from "../../assets";
import { Position } from "../../math/position";
import { moveModeBuilder } from "../../testHelpers";
import { TurnComplete } from "../player/Assets";
import { CreateSmallCastle } from "../player/buildings/Castles";
import { CreateSmallLumberjack } from "../player/buildings/Lumberjack";
import { CreateSmallMine } from "../player/buildings/Mine";
import { CreateKnight } from "../player/knights/Knight";
import { Mill } from "./buildings";
import { BattleStarted, BuildLumberjackSmall, BuildLumberjackSmallFailed, BuildLumberjackSmallSuccess, BuildMineSmall, BuildMineSmallFailed, BuildMineSmallSuccess, HexagonUpdated, ItemMoved, KnightCreated, LumberjackTakeover, MillTakeover, MineTakeover, ModalBattleOpen, MoveModeActivate, MoveModeActivated, MoveModeDeactivate, MoveModeEnd, MoveModeTargetHovered, PlayerUpdate, RequestSelectCoords, ResourcesGenerated, TurnAccepted, TurnPlayerComplete, TurnsComplete, TurnStarted, UpdateAllPlayerElements, WagonCreated } from "./events";
import { Terrain } from "./terrain";
import { ActionableAsset, FigherAsset, Player, ResourceGeneratingBuilding, ResourceGenerator, Resources, Team, teams } from "./types";

import "./world-state"
import { allocateResources, getActivePlayer, getCurrentTeam, getPlayer, setCurrentTeam } from "./world-state";
import { SidebarLoaded, StartGame, World, WorldLoaded } from "./worldLoader";

const mill = { ...Mill };
const resourceGenerator = (resources: ResourceGenerator, team: Team = "green") => ({
    ...mill,
    resources,
    team
}) as ResourceGeneratingBuilding;

const terrain = (): Terrain => ({
    sprite: {
        name: "",
        file: "",
        x: 0,
        y: 0
    },
    movementCosts: 1,
    defense: 1
})

const WorldBuilder = (rows: number = 5, cols: number = 5) =>
    (elements: { [key: string]: Asset[] } = {},
        teams: Team[] = ["green", "red"]) => {
        let world: World = {
            map: range(0, rows - 1).map(row =>
                range(0, cols - 1).map(col => ({
                    position: new Position(row, col),
                    terrain: terrain(),
                    elements: elements[`${row}:${col}`] ?? []
                }))
            ),
            teams
        }
        return world
    }

export const setupStage = async (teamTurn: Team) => {
    setCurrentTeam(teamTurn)
    await releaseHormone(TurnAccepted, teamTurn)
}

beforeEach(() => {
    releaseHormone(SidebarLoaded)
})

describe("Load World", () => {
    const spyOnGameStarted = jest.fn()
    hypothalamus.on(StartGame, spyOnGameStarted)
    beforeEach(async () => {
        const start = { row: 0, col: 0 }
        const knight: FigherAsset = {
            ...CreateKnight({ team: "green", ...start }),
            actions: { current: 2, max: 2 }
        };
        const castle: Asset = {
            id: "green-castle",
            name: buildings.castleSmall.name,
            ...start,
            team: "green"
        }
        await releaseHormone(WorldLoaded, WorldBuilder(1, 1)({ "0:0": [knight, castle] }))
    })

    it("creates the expected world", async () => {
        expect(getCurrentWorld()).toEqual({
            "map": [
                [
                    {
                        "position": {
                            "row": 0,
                            "col": 0,
                            "system": "manhattan"
                        },
                        "terrain": {
                            "sprite": {
                                "name": "",
                                "file": "",
                                "x": 0,
                                "y": 0
                            },
                            "movementCosts": 1,
                            "defense": 1
                        },
                        "elements": [
                            {
                                "id": expect.any(String),
                                "name": "player-knight",
                                "team": "green",
                                "row": 0,
                                "col": 0,
                                "movement": {
                                    "points": 10
                                },
                                "actions": {
                                    "current": 2,
                                    "max": 2
                                },
                                "health": {
                                    "current": 10,
                                    "max": 10
                                },
                                "dices": expect.anything()
                            },
                            {
                                "id": "green-castle",
                                "name": "building-castle-small",
                                "row": 0,
                                "col": 0,
                                "team": "green"
                            }
                        ]
                    }
                ]
            ],
            "teams": [
                "green",
                "red"
            ]
        })
    })

    it("sets up all the players", () => {
        teams().forEach(team => {
            expect(getPlayer(team)).toEqual({
                resources: {
                    hay: 100,
                    grain: 200,
                    iron: 200,
                    wood: 100,
                    stone: 100
                }
            })
        })
    })

    it("notifies about the start", () => {
        expect(spyOnGameStarted).toBeCalledTimes(1)
    })
})

describe("Turns for two teams", () => {
    const firstTeam: Team = "red"
    const secondTeam: Team = "green"
    const spyOnTurnStarted = jest.fn()
    hypothalamus.on(TurnStarted, spyOnTurnStarted)
    const spyOnTurnAccepted = jest.fn()
    hypothalamus.on(TurnAccepted, spyOnTurnAccepted)
    const spyOnTurnsComplete = jest.fn()
    hypothalamus.on(TurnsComplete, spyOnTurnsComplete)
    const spyOnRequestSelectCoords = jest.fn()
    hypothalamus.on(RequestSelectCoords, spyOnRequestSelectCoords)
    const greenPosition = { row: 0, col: 0 }
    const redPosition = { row: 1, col: 1 }
    const redCastle: Asset = {
        id: "red-castle",
        name: buildings.castleSmall.name,
        ...redPosition,
        team: firstTeam
    }
    const knight: FigherAsset = {
        ...CreateKnight({ team: secondTeam, ...greenPosition }),
        actions: { current: 0, max: 2 }
    };
    const greenCastle: Asset = {
        id: "green-castle",
        name: buildings.castleSmall.name,
        ...greenPosition,
        team: secondTeam
    }
    beforeEach(async () => {
        // Given the world is loaded, which also starts the turn (see test above)
        await releaseHormone(WorldLoaded, WorldBuilder(2, 2)(
            { "0:0": [knight, greenCastle], "1:1": [redCastle] },
            [secondTeam, firstTeam]))
        // And all required elements are available
        await releaseHormone(SidebarLoaded)
    })

    it("When turn is started, accepts a turn for the team next in line", () => {
        expect(spyOnTurnAccepted).toBeCalledTimes(1)
        expect(spyOnTurnAccepted).toBeCalledWith(firstTeam)
    })

    it("leaves the actions on the knight untouched", () => {
        expect(knight.actions.current).toBe(0)
    })

    it("requests to select the castle for the first team", () => {
        expect(spyOnRequestSelectCoords).toBeCalledTimes(1)
        expect(spyOnRequestSelectCoords).toBeCalledWith({
            "item": "building-castle-small",
            "row": 1,
            "col": 1,
            "payload": { "id": "red-castle", "name": "building-castle-small", "row": 1, "col": 1, "team": "red" }
        })
    })

    describe("When the first team is done", () => {
        beforeEach(async () => {
            await releaseHormone(TurnPlayerComplete)
        })

        it("passes on to the second team", () => {
            expect(spyOnTurnAccepted).toBeCalledTimes(2)
            expect(spyOnTurnAccepted).toBeCalledWith(secondTeam)
        })

        describe("When the second (and last) team is done", () => {
            beforeEach(async () => {
                await releaseHormone(TurnPlayerComplete)
            })

            it("calls the everything is done event", () => {
                expect(spyOnTurnsComplete).toBeCalledTimes(1)
            })

            it("passes on to the first team", () => {
                expect(spyOnTurnAccepted).toBeCalledTimes(3)
                expect(spyOnTurnAccepted).toBeCalledWith(firstTeam)
            })

            it("fills up the actions on the knight", () => {
                expect(knight.actions.current).toBe(knight.actions.max)
            })
        })
    })
})

describe("MoveMode", () => {
    const start = { row: 0, col: 0 }
    const end = { row: 2, col: 2 }
    const knight: FigherAsset = {
        ...CreateKnight({ team: "red", ...start }),
        actions: { current: 0, max: 2 }
    }

    beforeEach(async () => {
        await releaseHormone(WorldLoaded, WorldBuilder()({ "0:0": [knight] }))
    })

    it("hovers a move mode correctly", async () => {
        const spy = jest.fn()
        const moveMode = moveModeBuilder({ start: { col: 0, row: 0 } });
        setupStage(moveMode.asset.team)
        await releaseHormone(MoveModeActivate, moveMode)
        hypothalamus.on(MoveModeActivated, spy)
        await releaseHormone(MoveModeTargetHovered, { col: 2, row: 0 })
        expect(spy).toBeCalledTimes(1)
        expect(spy).toBeCalledWith({ ...moveMode, trail: expect.anything(), inReach: expect.anything(), end: { col: 2, row: 0 } })
    })

    describe("When the knight has already done all actions", () => {
        const spyOnHexagonUpdate = jest.fn()
        const spyOnMoveModeDeactivate = jest.fn()
        const spyOnItemMoved = jest.fn()
        hypothalamus.on(HexagonUpdated, spyOnHexagonUpdate)
        hypothalamus.on(MoveModeDeactivate, spyOnMoveModeDeactivate)
        hypothalamus.on(ItemMoved, spyOnItemMoved)

        beforeEach(async () => {
            // given I have a world with a knight on field 0,0
            await releaseHormone(WorldLoaded, WorldBuilder()({ "0:0": [knight] }))
            // And a move is started with this knight
            await releaseHormone(MoveModeActivate, {
                asset: knight,
                start
            })

            // when the move is applied
            await releaseHormone(MoveModeEnd, end)
            await new Promise(r => process.nextTick(r))
        })

        it("does not move the knight", () => {
            expect(getCurrentWorld().map[start.row][start.col].elements).toContain(knight)
            expect(getCurrentWorld().map[end.row][end.col].elements).not.toContain(knight)
        })
    })

    describe("Ending a move", () => {
        const start = { row: 0, col: 0 }
        const end = { row: 2, col: 2 }
        const knight = {
            ...CreateKnight({ team: "red", ...start }),
            movement: {
                points: 1000
            }
        }
        const targetKnight = () => ({ ...knight, ...end })
        const spyOnHexagonUpdate = jest.fn()
        const spyOnMoveModeDeactivate = jest.fn()
        const spyOnItemMoved = jest.fn()
        hypothalamus.on(HexagonUpdated, spyOnHexagonUpdate)
        hypothalamus.on(MoveModeDeactivate, spyOnMoveModeDeactivate)
        hypothalamus.on(ItemMoved, spyOnItemMoved)

        beforeEach(async () => {
            TurnComplete(knight)
            setupStage(knight.team)

            // given I have a world with a knight on field 0,0
            await releaseHormone(WorldLoaded, WorldBuilder()({ "0:0": [knight] }))
            // And a move is started with this knight
            await releaseHormone(MoveModeActivate, {
                asset: knight,
                start
            })

            // when the move is applied
            await releaseHormone(MoveModeTargetHovered, end)
            await releaseHormone(MoveModeEnd, end)
            await new Promise(r => process.nextTick(r))
        })

        it("moves the knight", () => {
            expect(getCurrentWorld().map[start.row][start.col].elements).not.toContain(knight)
            expect(getCurrentWorld().map[end.row][end.col].elements).toContainEqual(targetKnight())
        })

        it("updates the start hexagon to remove the knight", async () => {
            expect(spyOnHexagonUpdate).toBeCalledWith({ ...start, elements: [] })
        })

        it("update the end hexagon to add the knight", async () => {
            expect(spyOnHexagonUpdate).toBeCalledWith({ ...end, elements: [targetKnight()] })
        })

        it("ends the move mode", async () => {
            expect(spyOnMoveModeDeactivate).toBeCalledTimes(1)
        })

        it("notifies the world a knight has been moved to the new location", async () => {
            expect(spyOnItemMoved).toBeCalledTimes(1)
            expect(spyOnItemMoved).toBeCalledWith({ asset: knight, location: end })
        })
    })
})

describe("Item Moved", () => {

    const location = { row: 0, col: 0 }
    const myKnight = { ...CreateKnight({ team: "green", ...location }), id: "my-knight" }
    const friendlyKnight = { ...CreateKnight({ team: "green", ...location }), id: "friendly-knight" }
    const enemyKnight = { ...CreateKnight({ team: "red", ...location }), id: "other-knight" }
    const mill = { id: "mill", name: buildings.mill.name }

    const spyOnBattleStarted = jest.fn()
    hypothalamus.on(BattleStarted, spyOnBattleStarted)

    beforeEach(() => {
        TurnComplete(myKnight, friendlyKnight, enemyKnight)
        setupStage(myKnight.team)
    })

    describe("When moved to a field with noone else", () => {

        beforeEach(async () => {
            // given I have a world with a only my knight on field 0,0
            await releaseHormone(WorldLoaded, WorldBuilder()({ "0:0": [myKnight] }))
        })

        it("does not fail", async () => {
            await releaseHormone(ItemMoved, { asset: myKnight, location })
        })
        it("does not start a battle", async () => {
            await releaseHormone(ItemMoved, { asset: myKnight, location })
            expect(spyOnBattleStarted).not.toBeCalled()
        })
    })

    describe.each([
        {
            name: "mill",
            field: mill,
            spy: (() => { const spy = jest.fn(); hypothalamus.on(MillTakeover, spy); return spy })()
        },
        {
            name: "lumberjack",
            field: CreateSmallLumberjack({ position: { row: 0, col: 0 }, asset: { team: "green" } as Asset }),
            spy: (() => { const spy = jest.fn(); hypothalamus.on(LumberjackTakeover, spy); return spy })()
        },
        {
            name: "mine",
            field: CreateSmallMine({ position: { row: 0, col: 0 }, asset: { team: "green" } as Asset }),
            spy: (() => { const spy = jest.fn(); hypothalamus.on(MineTakeover, spy); return spy })()
        }
    ])
        ("When moved to a field with %s", ({ field, spy }) => {
            describe(`And the ${field.name} belongs to the player`, () => {
                beforeEach(async () => {
                    // given I have a world with two knights on field 0,0
                    await releaseHormone(WorldLoaded, WorldBuilder()({ "0:0": [myKnight, { ...field, team: "green" }] }))
                    await releaseHormone(ItemMoved, { asset: myKnight, location })
                })

                it(`does not trigger a ${field.name} taken`, () => {
                    expect(spy).not.toBeCalled()
                })
            })
            describe(`And the ${field.name} does not belong to the player yet`, () => {
                beforeEach(async () => {
                    // given I have a world with two knights on field 0,0
                    await releaseHormone(WorldLoaded, WorldBuilder()({ "0:0": [myKnight, { ...field, team: "red" }] }))
                    setupStage(myKnight.team)
                    await releaseHormone(ItemMoved, { asset: myKnight, location })
                })

                it(`triggers a ${field.name} taken`, () => {
                    expect(spy).toBeCalled()
                    expect(spy).toBeCalledWith({
                        asset: { ...field, team: "red" },
                        transfered: {
                            from: "red",
                            to: myKnight.team
                        },
                        location,
                        by: myKnight,
                        team: myKnight.team
                    })
                })
            })
        })

    describe("When moved to a field with friendly knights", () => {
        beforeEach(async () => {
            // given I have a world with two knights on field 0,0
            await releaseHormone(WorldLoaded, WorldBuilder()({ "0:0": [myKnight, friendlyKnight] }))
            await releaseHormone(ItemMoved, { asset: myKnight, location })
        })

        it("doesn't trigger a battle", () => {
            expect(spyOnBattleStarted).not.toBeCalled()
        })
    })
})

describe("On Battle Mode", () => {

    const myKnight = { id: "my-knight", name: player.knight.name, team: "green" }
    const enemyKnight = { id: "other-knight", name: player.knight.name, team: "red" }
    const location = { row: 0, col: 0 }
    const spyOnModalOpenBattle = jest.fn()
    hypothalamus.on(ModalBattleOpen, spyOnModalOpenBattle)

    it("triggers the ModalOpenBattle", async () => {
        await releaseHormone(BattleStarted, {
            location,
            attacker: [myKnight],
            defender: [enemyKnight]
        })

        expect(spyOnModalOpenBattle).toBeCalledTimes(1)
    })
})

describe("Building", () => {
    const spyOnHexagonUpdate = jest.fn()
    const spyOnUpdateAllPlayerElements = jest.fn()
    const spyOnPlayerUpdate = jest.fn()
    hypothalamus.on(HexagonUpdated, spyOnHexagonUpdate)
    hypothalamus.on(UpdateAllPlayerElements, spyOnUpdateAllPlayerElements)
    hypothalamus.on(PlayerUpdate, spyOnPlayerUpdate)


    beforeEach(async () => {
        await releaseHormone(WorldLoaded, WorldBuilder()())
        jest.resetAllMocks()
    })

    describe("Building a knight", () => {
        let playerBefore: Player;

        describe("When the player triggers a build", () => {
            let castle = CreateSmallCastle({ team: getCurrentTeam(), col: 0, row: 0 });
            beforeEach(async () => {
                castle = CreateSmallCastle({ team: getCurrentTeam(), col: 0, row: 0 });
                await releaseHormone(WorldLoaded, WorldBuilder()({
                    "0:0": [castle]
                }))
                jest.resetAllMocks()
                await releaseHormone(KnightCreated, { 
                    col: 0, row: 0, team: getCurrentTeam(),
                    origin: castle 
                })
                playerBefore = getActivePlayer()
            })

            it("adds the knight to the position", async () => {
                expect(getCurrentWorld().map[0][0].elements.find(e => e.name === player.knight.name))
                    .toEqual({
                        ...CreateKnight({ col: 0, row: 0, team: getCurrentTeam() }),
                        id: expect.anything()
                    })
            })
            it("notifies the hexagon on the change to allow rerender", () => {
                expect(spyOnHexagonUpdate).toBeCalledTimes(1)
            })
            it("updates the player", () => {
                expect(spyOnUpdateAllPlayerElements).toBeCalledTimes(1)
            })
            it("removes the turn from the castle", () => {
                expect((getCurrentWorld().map[0][0].elements.find(element => element.id === castle.id) as ActionableAsset).actions.current).toBe(1)
            })

            it("removes the player resources, and notifies the world", () => {
                expect(spyOnPlayerUpdate).toBeCalledTimes(1)
                expect(spyOnPlayerUpdate).toBeCalledWith({
                    ...playerBefore,
                    resources: {
                        ...playerBefore.resources,
                        iron: 0
                    }
                })
            })

        })

        
        describe("when the player tries to build a knight without resources", () => {
            const castle = CreateSmallCastle({ team: getCurrentTeam(), col: 0, row: 0 });

            beforeEach(async () => {
                await releaseHormone(WorldLoaded, WorldBuilder()({
                    "0:0": [castle]
                }))
                jest.resetAllMocks()
                await releaseHormone(KnightCreated, { col: 0, row: 0, team: getCurrentTeam(), origin: castle })
                playerBefore = getActivePlayer()
            })

            it("does not add another the knight to the position", async () => {
                await releaseHormone(KnightCreated, { col: 0, row: 0, team: getCurrentTeam(), origin: castle })
                expect(getCurrentWorld().map[0][0].elements.filter(element => element.name === player.knight.name)).toHaveLength(1)
            })
        })

        describe("when the player tries to build a knight without a turn left on the castle", () => {

            beforeEach(async () => {
                const origin = CreateSmallCastle({ team: getCurrentTeam(), col: 0, row: 0  })
                origin.actions.current = 0;
                await releaseHormone(KnightCreated, { col: 0, row: 0, team: getCurrentTeam(), origin })
            })

            it("does not add the knight to the position", () => {
                expect(getCurrentWorld().map[0][0].elements).toHaveLength(0)
            })
        })
    })

    describe.each([
        { what: "lumbermill", action: BuildLumberjackSmall, success: BuildLumberjackSmallSuccess, fail: BuildLumberjackSmallFailed, ground: "forest", create: CreateSmallLumberjack },
        { what: "mine", action: BuildMineSmall, success: BuildMineSmallSuccess, fail: BuildMineSmallFailed, ground: "mountain", create: CreateSmallMine },
    ])
        ("Building a %what", ({ what, action, success, fail, ground, create }) => {
            let playerBefore: Player;
            // try build field -> if wagon on field         -> if wood -> build lumbermill -> update world -> remove wagoon
            //                    |-> if not wagon -> fail     |-> if not wood -> fail

            const spyOnSuccessfullyBuild = jest.fn()
            const spyOnBuildFailed = jest.fn()
            hypothalamus.on(success, spyOnSuccessfullyBuild)
            hypothalamus.on(fail, spyOnBuildFailed)

            beforeEach(async () => {
                await releaseHormone(WagonCreated, { col: 0, row: 0, team: getCurrentTeam(), origin: CreateSmallCastle({ team: getCurrentTeam(), col: 0, row: 0 }) });
                jest.resetAllMocks()
            })

            describe("When it's not the players/wagons turn", () => {
                const otherAsset = { id: "", name: "", team: "fake" as Team }
                const position = { col: 0, row: 0 }
                beforeEach(async () => {
                    await releaseHormone(action, { asset: otherAsset, position })
                    playerBefore = getActivePlayer()
                })
                it(`does not build a ${what}`, async () => {
                    expect(spyOnBuildFailed).toBeCalledTimes(1)
                    expect(spyOnBuildFailed).toBeCalledWith({
                        asset: otherAsset,
                        position,
                        reason: "Not the turn of the team " + otherAsset.team
                    })
                    expect(spyOnSuccessfullyBuild).not.toBeCalled()
                })
            })

            describe("When there is no wagon on the field", () => {
                const otherAsset = { id: "", name: "", team: "red" as Team }
                const position = { col: 0, row: 0 }
                beforeEach(async () => {
                    await releaseHormone(action, { asset: otherAsset, position })
                    playerBefore = getActivePlayer()
                })
                it(`does not build a ${what}`, async () => {
                    expect(spyOnBuildFailed).toBeCalledTimes(1)
                    expect(spyOnBuildFailed).toBeCalledWith({
                        asset: otherAsset,
                        position,
                        reason: "No wagon on field"
                    })
                    expect(spyOnSuccessfullyBuild).not.toBeCalled()
                })
            })

            describe("When there is already a building on the field", () => {
                const otherAsset = { id: "player-wagon", name: "player-wagon", team: "red" as Team }
                const position = { col: 0, row: 0 }
                beforeEach(async () => {
                    const castle: Asset & ResourceGeneratingBuilding = {
                        id: "green-castle",
                        name: buildings.castleSmall.name,
                        ...position,
                        team: "green",
                        resources: { wood: { generatedResource: 1 } }
                    }
                    await releaseHormone(WorldLoaded, WorldBuilder(1, 1)({ "0:0": [castle] }))
                    await releaseHormone(WagonCreated, { col: 0, row: 0, team: getCurrentTeam(), origin: CreateSmallCastle({ team: getCurrentTeam(), col: 0, row: 0  }) });
                    getCurrentWorld().map[0][0].terrain = {
                        ...getCurrentWorld().map[0][0].terrain,
                        sprite: {
                            ...getCurrentWorld().map[0][0].terrain.sprite,
                            name: ground
                        }
                    }
                    jest.resetAllMocks()
                    await releaseHormone(action, { asset: otherAsset, position })
                    playerBefore = getActivePlayer()
                })
                it(`does not build a ${what}`, async () => {
                    expect(spyOnBuildFailed).toBeCalledTimes(1)
                    expect(spyOnBuildFailed).toBeCalledWith({
                        asset: otherAsset,
                        position,
                        reason: "There is already a building on the field"
                    })
                    expect(spyOnSuccessfullyBuild).not.toBeCalled()
                })
            })

            describe("When everything is okay", () => {
                const asset = { id: "player-wagon", name: "player-wagon", team: "red" as Team }
                const position = { col: 0, row: 0 }

                beforeEach(async () => {
                    // 
                    getCurrentWorld().map[0][0].terrain = {
                        ...getCurrentWorld().map[0][0].terrain,
                        sprite: {
                            ...getCurrentWorld().map[0][0].terrain.sprite,
                            name: ground
                        }
                    }
                    await releaseHormone(action, { asset, position })
                    playerBefore = getActivePlayer()
                })

                it(`adds the ${what} to the position`, () => {
                    expect(getCurrentWorld().map[0][0].elements[0])
                        .toEqual({
                            ...create({ position, asset }),
                            id: expect.anything()
                        })
                })
                it("notifies the hexagon on the change to allow rerender", () => {
                    expect(spyOnHexagonUpdate).toBeCalledTimes(1)
                })
                it("updates the player", () => {
                    expect(spyOnUpdateAllPlayerElements).toBeCalledTimes(1)
                })

                it("removes the wagon, and notifies the world", () => {
                    expect(getCurrentWorld().map[0][0].elements.every(element => element.name !== "player-wagon")).toBe(true)
                    expect(spyOnPlayerUpdate).toBeCalledTimes(1)
                    expect(spyOnPlayerUpdate).toBeCalledWith({
                        ...playerBefore
                    })
                })
            })
        })
})

describe("Allocate resources", () => {
    const initialResources: Resources = {
        iron: 0, hay: 100, grain: 0, stone: 0, wood: 0
    }
    const spyOnResourcesGenerated = jest.fn()
    hypothalamus.on(ResourcesGenerated, spyOnResourcesGenerated)
    it("leaves the initial resources untouched if no changes", () => {
        const resources = allocateResources(initialResources, []);
        expect(resources).toEqual(initialResources);
    })
    it("creates a new resource package, distributing all resources", () => {
        const resourceGeneratingBuilding: ResourceGeneratingBuilding = {
            ...mill,
            resources: {
                grain: {
                    generatedResource: 50,
                    hay: 100
                }
            },
            team: "green"
        }
        const resources = allocateResources(initialResources, [resourceGeneratingBuilding]);
        expect(resources).toEqual({
            ...initialResources,
            hay: 0,
            grain: 50
        });
        expect(spyOnResourcesGenerated).toBeCalledTimes(1)
        expect(spyOnResourcesGenerated).toBeCalledWith(
            resourceGenerator({
                grain: {
                    generatedResource: 50,
                    hay: 100
                }
            }))
    })
})

describe("Accept Turn", () => {
    const spyOnResourcesGenerated = jest.fn()
    hypothalamus.on(ResourcesGenerated, spyOnResourcesGenerated)

    beforeEach(async () => {
        // given player green has a mill on field 0,0
        await releaseHormone(WorldLoaded, WorldBuilder()({ "0:0": [{ ...mill, team: "green" }] }))
        await releaseHormone(TurnAccepted, "green")
    })

    describe("The player with a mill accepts their turn", () => {

        it("creates 50 hay in the players mills", () => {
            expect(spyOnResourcesGenerated).toBeCalledWith(
                resourceGenerator({
                    hay: { generatedResource: 50 }
                }),
            )
        })

        it("converts hay to grain if available", () => {
            expect(spyOnResourcesGenerated).toBeCalledWith(
                resourceGenerator({
                    grain: {
                        hay: 100,
                        generatedResource: 50
                    }
                })
            )
        })

        it("converts the available hay to grain in the players mills, but at most 100 hay to 50 grain", () => {
            expect(getPlayer("green").resources.hay).toBe(50)
            expect(getPlayer("green").resources.grain).toBe(250)
        })
    })
})