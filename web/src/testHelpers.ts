import { releaseHormone } from "organismus";
import { range } from "./arrays";
import { MoveModeBuilderData } from "./assets/map/Hexagon.movement.test";
import { Asset, setCurrentTeam, Team, World } from "./game";
import { CreateKnight } from "./game/player/knights/Knight";
import { MoveModeData, TurnAccepted } from "./game/world/events";
import { Terrain } from "./game/world/terrain";
import { Position } from "./math/position";

export const moveModeBuilder = (builder: MoveModeBuilderData | undefined = undefined): MoveModeData => ({
    asset: builder?.asset ?? CreateKnight({ team: "red", ...builder?.start ?? { row: 0, col: 0 } }),
    start: builder?.start ?? { row: 0, col: 0 },
    inReach: builder?.inReach,
    trail: builder?.trail,
    end: builder?.end
})

export const setupStage = async (teamTurn: Team) => {
    setCurrentTeam(teamTurn)
    await releaseHormone(TurnAccepted, teamTurn)
}

export async function awaitImmediate(): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, 0))
}

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

export const WorldBuilder = (rows: number = 5, cols: number = 5) =>
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