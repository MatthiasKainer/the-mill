import { Sprite } from "./sprite"

export type Terrain = {
    sprite: Sprite, 
    movementCosts: number | undefined,
    defense: number
}

export const TerrainPresets: {[key:string]: Terrain} = {
    "gras" : {
        sprite: {
            file: "hexagonTerrain_sheet",
            x: 414,
            y: 1906
        },
        movementCosts: 1,
        defense: 0
    },
    "desert" : {
        sprite: {
            file: "hexagonTerrain_sheet",
            x: 902,
            y: 627
        },
        movementCosts: 4,
        defense: 0
    },
    "mud" : {
        sprite: {
            file: "hexagonTerrain_sheet",
            x: 658,
            y: 912
        },
        movementCosts: 4,
        defense: 1
    },
    "muddyHills" : {
        sprite: {
            file: "hexagonTerrain_sheet",
            x: 780,
            y: 627
        },
        movementCosts: 8,
        defense: 3
    },
    "forest" : {
        sprite: {
            file: "hexagonTerrain_sheet",
            x: 536,
            y: 912
        },
        movementCosts: 8,
        defense: 3
    },
    "mountain" : {
        sprite: {
            file: "hexagonTerrain_sheet",
            x: 414,
            y: 1052
        },
        movementCosts: 10,
        defense: 9
    }
}

export const randomTerrain = () => {
    const keys = Object.keys(TerrainPresets)
    return TerrainPresets[keys[Math.floor(Math.random() * (keys.length - 1))]]
}