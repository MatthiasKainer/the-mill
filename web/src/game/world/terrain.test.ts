import { randomTerrain, TerrainPresets } from "./terrain"

describe("Terrain", () => {
    const oldRand = Math.random

    it("should return the correct first random terrain", () => {
        Math.random = () => 0
        expect(randomTerrain()).toBe(TerrainPresets.gras)
    })

    it("should return the correct last random terrain", () => {
        Math.random = () => 1
        expect(randomTerrain()).toBe(TerrainPresets.mountain)
    })

    afterEach(() => {
        Math.random = oldRand
    })
})