import { getPlayerStartAssets } from "./load"

describe("getPlayerStartAssets", () => {
    it("always returns one small castle for the player", () => {
        const result = getPlayerStartAssets("green", { rows: 2, cols: 2 });
        expect(result).toContainEqual([{ id: expect.anything(), name : "building-castle-small", team: "green"}])
    })
})