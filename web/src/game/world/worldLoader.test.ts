import { html } from "lit"
import { useReceptor } from "organismus"
import { pureLit } from "pure-lit"
import { WorldLoaded } from "."
import { load, World } from "./worldLoader"
import { fixture } from "@open-wc/testing-helpers";

const system = "manhattan"

describe("loading", () => {
    it("Loads a map of the correct size", async () => {
        expect(await load({ rows: 2, cols: 2 })).toEqual([
            [{ position: { "col": 0, "row": 0, system }, terrain: expect.anything(), elements: expect.anything() }, { position: { "col": 1, "row": 0, system }, terrain: expect.anything(), elements: expect.anything() }],
            [{ position: { "col": 0, "row": 1, system }, terrain: expect.anything(), elements: expect.anything() }, { position: { "col": 1, "row": 1, system }, terrain: expect.anything(), elements: expect.anything() }]
        ])
    })

    it("Dispatches the resulting map to receptors", async () => {
        let result: World | undefined
        pureLit("test-receiver", (el) => {
            useReceptor(el, WorldLoaded, (r) => (result = r, Promise.resolve()))
            return html`<div></div>`
        })
        await fixture("<test-receiver></test-receiver>");
        await load({ rows: 2, cols: 2 })
        expect(result?.map).toEqual([
            [{ position: { "col": 0, "row": 0, system }, terrain: expect.anything(), elements: expect.anything() }, { position: { "col": 1, "row": 0, system }, terrain: expect.anything(), elements: expect.anything() }],
            [{ position: { "col": 0, "row": 1, system }, terrain: expect.anything(), elements: expect.anything() }, { position: { "col": 1, "row": 1, system }, terrain: expect.anything(), elements: expect.anything() }]
        ])
    })
})