import { getBuildingsForMap } from "./buildings"

describe("getBuildingsForMap", () => {
    it("always returns at least two mills", () => {
        const result = getBuildingsForMap({ rows: 1, cols: 1 })
        expect(result).toContainEqual([{ id: expect.anything(), name : "building-mill"}, { id: expect.anything(), name : "building-mill"}])
    })
})
