import { MoveableAsset, SimpleCoords } from "../../game"
import { moveModeBuilder } from "../../testHelpers"
import { click, getCssClass } from "./Hexagon.movement"

import { useReceptor } from 'organismus';
import { MoveModeEnd } from "../../game/world/events";

export type MoveModeBuilderData = {
    asset?: MoveableAsset
    start?: SimpleCoords
    trail?: SimpleCoords[]
    inReach?: SimpleCoords[]
    end?: SimpleCoords
}

const hexagon = { row: 1, col: 1 }

describe("Hexagon Movement Behaviour", () => {
    it("returns the no style if no movement", () => {
        expect(getCssClass(hexagon, undefined)).toBe("")
    })
    it("returns the inactive style if not in movement", () => {
        expect(getCssClass(hexagon, moveModeBuilder({ inReach: [hexagon] }))).toBe("inactive")
    })

    it("returns the inactive unreachable style if not in movement and not in reachable", () => {
        expect(getCssClass(hexagon, moveModeBuilder())).toBe("inactive unreachable")
    })

    it("returns the active style if in start", () => {
        expect(getCssClass(hexagon, moveModeBuilder({ start: hexagon }))).toBe("active start")
    })
    it("returns the unreachable style if at end without a trail", () => {
        expect(getCssClass(hexagon, moveModeBuilder({ end: hexagon }))).toBe("active unreachable")
    })
    it("returns the active style if in end", () => {
        expect(getCssClass(hexagon, moveModeBuilder({ trail: [{ row: 1, col: 0 }], end: hexagon }))).toBe("active end")
    })
    it("returns the active style if in trail", () => {
        expect(getCssClass(hexagon, moveModeBuilder({ trail: [hexagon] }))).toBe("active trail")
    })
})

describe("Hexagon click behavour", () => {
    const spy = jest.fn()

    beforeEach(() => {
        jest.resetAllMocks()
        useReceptor(spy, MoveModeEnd, spy)
    })

    it("does nothing if not in movement mode", () => {
        click(hexagon, undefined)
        expect(spy).not.toBeCalled()
    })

    it("dispatches move end if in movement mode", () => {
        click(hexagon, moveModeBuilder())
        expect(spy).toBeCalled()
        expect(spy).toBeCalledWith(hexagon)
    })
})