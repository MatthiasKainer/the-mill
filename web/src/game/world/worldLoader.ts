import { defineHormone, releaseHormone } from "organismus";
import { range } from "../../arrays";
import { Position } from "../../math/position";
import { getPlayerStartAssets } from "../player/load";
import { getBuildingsForMap } from "./buildings";
import { randomTerrain, Terrain } from "./terrain";
import { Asset, Team } from "./types";

type Props = {
    rows: number,
    cols: number
}

type Tile = {
    position: Position,
    terrain: Terrain,
    elements: Asset[]
}

type Map = Tile[][]

export type World = {
    map: Map,
    teams: Team[]
}

export const WorldLoaded = defineHormone<World>("game/world/worldLoaded")

export const StartGame = defineHormone("game/start")
export const SidebarLoaded = defineHormone("game/load/sidebar")

const loadMapAssets = ({rows, cols}: Props) => {
    const buildings = getBuildingsForMap({ rows, cols })
    return buildings
}

const loadPlayerAssets = (team: Team, {rows, cols}: Props) => {
    return getPlayerStartAssets(team, { rows, cols })
}

const getNextElement = (array: Asset[][], row: number, col: number) => {
    const results = array.pop() ?? []
    return results.map(result => ({...result, row, col})) as Asset[]
}

export const load = async ({rows, cols}: Props) => {
    const mapAssets = loadMapAssets({ rows, cols })
    const playerAssets = loadPlayerAssets("green", { rows, cols })
    const redAssets = loadPlayerAssets("red", { rows, cols })
    const map = range(0, rows - 1)
        .map((row) => 
            range(0, cols - 1)
                .map((col) => ({ 
                    position: new Position(row, col), 
                    terrain: randomTerrain(),
                    elements: [
                        ...(getNextElement(mapAssets, row, col)), 
                        ...(getNextElement(playerAssets, row, col)),
                        ...(getNextElement(redAssets, row, col)),
                    ]
                }))
        ) as Map;
    await releaseHormone(WorldLoaded, {map, teams: ["red", "green"]});
    return map
}