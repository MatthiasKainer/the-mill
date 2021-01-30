import { Asset, FigherAsset, Team } from ".";
import { buildings } from "../..";
import { WorldBuilder } from "../../testHelpers";
import { CreateKnight } from "../player/knights/Knight";
import { findCoords } from "./navigator";

describe("findCoords", () => {
    const firstTeam: Team = "red"
    const secondTeam: Team = "green"
    const greenPosition = { row: 0, col: 0, system: "manhattan" }
    const redPosition = { row: 1, col: 1, system: "manhattan" }
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
    let world = WorldBuilder(2, 2)(
        { "0:0": [knight, greenCastle], "1:1": [redCastle] }, 
        [secondTeam, firstTeam])

    beforeEach(async () => {
        world = WorldBuilder(2, 2)(
            { "0:0": [knight, greenCastle], "1:1": [redCastle] }, 
            [secondTeam, firstTeam])
    })

    it("returns null if no element was found that matches the search", () => {
        expect(findCoords(world, { name: "does not exist", team: "does not exist" as Team}))
            .toBeNull()
    })

    it("returns the first element with the matching name if only searched for name", () => {
        expect(findCoords(world, { name: buildings.castleSmall.name }))
            .toEqual(greenPosition)
    })

    it("returns the first element with the matching name and team if searching for both", () => {
        expect(findCoords(world, { name: buildings.castleSmall.name, team: firstTeam }))
            .toEqual(redPosition)
    })
})