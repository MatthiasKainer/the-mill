import { css, html } from "lit";
import { releaseHormone, useReceptor } from "organismus";
import { pureLit, useState, useOnce } from "pure-lit";
import { ItemSelected, SelectedItem } from "../../game/world/events";

import "./selectedCastle"
import "./selectedKnight"
import "./selectedWagon"
import { Position } from "../../math/position";
import { buildings, player } from "..";
import { SidebarLoaded } from "../../game";
import "./controls/"

type SelectionState = {
    dirty: boolean
    position?: Position
    elements: {item: string, payload?: unknown}[]
}

const newState = (element: { row: number, col: number, item: string, payload?: unknown } | undefined) => ({
    position: element ? new Position(element?.row, element?.col) : undefined,
    elements: element ? [{item: element.item, payload: element.payload}] : [],
    dirty: false
})

export default pureLit("controls-sidebar", async  (el) => {
    const { get: getSelectedElement, set: setSelectedElement } = useState<SelectedItem<unknown> | undefined>(el, undefined)
    useReceptor(el, ItemSelected, setSelectedElement)
    const selectedElement = getSelectedElement()
    const {get, set} = useState<SelectionState>(el, newState(selectedElement))
    const current = get()
    if (!current.dirty && selectedElement && new Position(selectedElement.row, selectedElement.col).equals(current.position)) {
        set({ 
            ...current, 
            elements: [...current.elements, {item: selectedElement.item, payload: selectedElement.payload}],
            dirty: selectedElement.item === "hexagon"
        })
    } else {
        set(newState(selectedElement))
    }

    useOnce(el, () => {
        setTimeout(() => {
            releaseHormone(SidebarLoaded)
        }, 1)
    })

    return html`
        ${get().elements.map(element => {
            switch (element.item) {
                case buildings.castleSmall.name:
                    return html`<sidebar-castle 
                        .selected="${{row: get().position?.row, col: get().position?.col, payload: element.payload}}">
                    </sidebar-castle>`
                case player.knight.name:
                    return html`<sidebar-knight
                        .selected="${{row: get().position?.row, col: get().position?.col, payload: element.payload}}">
                    </sidebar-knight>`
                case player.wagon.name:
                    return html`<sidebar-wagon
                        .selected="${{row: get().position?.row, col: get().position?.col, payload: element.payload}}">
                    </sidebar-wagon>`
                default:
                    case buildings.castleSmall.name:
                    return html``
            }
        })}
    `
}, {
    styles: css`:host { 
        position: absolute;
        display: block;
        min-width: 200px;
        width: 20%;
        right: 20px;
        top: 20px;
        z-index: 2;
    }`
})