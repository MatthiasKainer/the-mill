import { Sprite } from "./sprite"

export type Terrain = {
    sprite: Sprite, 
    movementCosts: number | undefined,
    defense: number
}

// x=122
// y=122

export const TerrainPresets: {[key:string]: Terrain} = {
    "gras" : {
        sprite: {
            name: "gras",
            file: "hexagonTerrain_sheet",
            x: 414,
            y: 1906
        },
        movementCosts: 1,
        defense: 0
    },
    "desert" : {
        sprite: {
            name: "desert",
            file: "hexagonTerrain_sheet",
            x: 902,
            y: 627
        },
        movementCosts: 4,
        defense: 0
    },
    "mud" : {
        sprite: {
            name: "mud",
            file: "hexagonTerrain_sheet",
            x: 658,
            y: 912
        },
        movementCosts: 4,
        defense: 1
    },
    "muddyHills" : {
        sprite: {
            name: "muddyHills",
            file: "hexagonTerrain_sheet",
            x: 780,
            y: 627
        },
        movementCosts: 8,
        defense: 3
    },
    "forest" : {
        sprite: {
            name: "forest",
            file: "hexagonTerrain_sheet",
            x: 536,
            y: 912
        },
        movementCosts: 8,
        defense: 3
    },
    "mountain" : {
        sprite: {
            name: "mountain",
            file: "hexagonTerrain_sheet",
            x: 536,
            y: 1195
        },
        movementCosts: 10,
        defense: 9
    }
}

export const randomTerrain = () => {
    const keys = Object.keys(TerrainPresets)
    return TerrainPresets[keys[Math.floor(Math.random() * (keys.length))]] ?? TerrainPresets.mountain
}