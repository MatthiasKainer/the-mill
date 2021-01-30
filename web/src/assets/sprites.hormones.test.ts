import { HexagonUpdated, ItemSelected } from "../game/world/events";
import { releaseHormone, useReceptor } from "organismus";
import { setupStage } from "../testHelpers";
import { fixture } from "@open-wc/testing-helpers";
import { spriteFactory } from "./sprites";
import { buildings } from ".";

describe("sprite receptors", () => {
    const spy = jest.fn()
    useReceptor(spy, ItemSelected, spy)

    beforeAll(async () => {
        const assets = [{ id: buildings.castleSmall.name, name: buildings.castleSmall.name, team: "player" }]
        await setupStage("player")
        await fixture(spriteFactory(assets, 0, 0));
    })

    it("selects the element if the hexagon is updated", async () => {
        await releaseHormone(HexagonUpdated, { col: 0, row: 0, elements: [] })
        await new Promise(process.nextTick);
        expect(spy).toBeCalledTimes(2)
        expect(spy).toBeCalledWith({
            "col": 0,
            "item": "building-castle-small",
            "payload": {
                id: "building-castle-small",
                name: "building-castle-small",
                team: "player"
            },
            "row": 0,
        })
    })
})