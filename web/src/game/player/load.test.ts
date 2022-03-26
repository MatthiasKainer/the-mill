import { getPlayerStartAssets } from "./load"

describe("getPlayerStartAssets", () => {
    it("always returns one small castle for the player", () => {
        const result = getPlayerStartAssets("green", { rows: 2, cols: 2 });
        expect(result).toContainEqual([{ 
            id: expect.anything(), 
            name : "building-castle-small", 
            team: "green", 
            "resources": {"grain": {"generatedResource": 10}, "hay": {"generatedResource": 10}, "iron": {"generatedResource": 10}, "stone": {"generatedResource": 10}},
            actions: { current: 2, max: 2 },
            health: { current: 60, max: 60 },
            dices: expect.anything(),
            occurences: { min: 1 },
        }])
    })
})