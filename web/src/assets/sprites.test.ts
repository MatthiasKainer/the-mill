import { fixture } from "@open-wc/testing-helpers";
import userEvent from "@testing-library/user-event"
import { ItemSelected } from "../game/world/events";
import { mill, castleSmall } from "./buildings";
import { useReceptor } from "organismus";
import { spriteFactory } from "./sprites"
import { setupStage } from "../testHelpers";

describe("Sprite Factory", () => {
    it("adds an empty element for an unknown sprite", async () => {
        const assets = [{ id: "unknown-asset", name: "unknown-asset" }]
        const element = await fixture(spriteFactory(assets, 0, 0));
        expect(element.outerHTML).toContain(`<span id="unknown-asset"></span>`)
    })

    it("adds the expected element for a known sprite", async () => {
        const assets = [{ id: mill.name, name: mill.name}]
        const element = await fixture(spriteFactory(assets, 0, 0));
        expect(element.outerHTML).toContain(`<building-mill id="building-mill"></building-mill>`)
    })

    it("adds the expected attributes to a known sprite", async () => {
        const assets = [{ id: castleSmall.name, name: castleSmall.name, team: "player" }]
        const element = await fixture(spriteFactory(assets, 0, 0));
        expect(element.outerHTML).toContain(`<building-castle-small id="building-castle-small" team="player"></building-castle-small>`)
    })

    it("selects the element if clicked on it", async () => {
        const assets = [{ id: castleSmall.name, name: castleSmall.name, team: "player" }]
        await setupStage("player")
        const spy = jest.fn()
        const element = await fixture(spriteFactory(assets, 0, 0));
        useReceptor(spy, ItemSelected, spy)
        userEvent.click(element)
        expect(spy).toBeCalledTimes(1)
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