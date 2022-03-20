import { generateResources, getBuildingsForMap } from "./buildings"

describe("getBuildingsForMap", () => {
    it("always returns at least two mills", () => {
        const result = getBuildingsForMap({ rows: 1, cols: 1 })
        expect(result).toContainEqual([
            {"id": expect.anything(), "max": 2, "min": 0, "name": "building-mill", "occurences": {"min": 1}, "resources": {"grain": {"generatedResource": 50, "hay": 100}, "hay": {"generatedResource": 50}}},
            {"id": expect.anything(), "max": 10, "min": 8, "name": "building-mill", "occurences": {"min": 1}, "resources": {"grain": {"generatedResource": 50, "hay": 100}, "hay": {"generatedResource": 50}}}
        ])
    })
})

describe("Generate resources", () => {
    it("works with an arbitrary amount of buildings", () => {
        expect(generateResources({
            id: "building-mill",
            name: "Mill",
            resources: {
                grain: {
                    hay: 100,
                    generatedResource: 50,
                }
            }
        }, {
            id: "building-mill",
            name: "Mill",
            team: "green",
            resources: {
                hay: {
                    stone: 100,
                    generatedResource: 50,
                }
            }
        },
            {
                id: "building-mill",
                name: "Mill",
                resources: {
                    grain: {
                        iron: 100,
                        generatedResource: 50,
                    }
                }
            })).toEqual([{
                id: "building-mill",
                name: "Mill",
                resources: {
                    grain: {
                        hay: 100,
                        generatedResource: 50,
                    }
                }
            }, {
                id: "building-mill",
                name: "Mill",
                team: "green",
                resources: {
                    hay: {
                        stone: 100,
                        generatedResource: 50,
                    }
                }
            }, {
                id: "building-mill",
                name: "Mill",
                resources: {
                    grain: {
                        iron: 100,
                        generatedResource: 50,
                    }
                }
            }]);
    })
})
