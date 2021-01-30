import { html } from "lit-element";
import { releaseHormone, useReceptor } from "organismus";
import { pureLit } from "pure-lit";
import {useState} from "lit-element-state-decoupler"
import { ItemSelected, SelectedItem } from "../../game/world/events";

import "./selectedCastle"
import "./selectedKnight"
import "./selectedWagon"
import { Position } from "../../math/position";
import { buildings, player } from "..";
import { SidebarLoaded } from "../../game";
import { useOnce } from "lit-element-effect";

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

export default pureLit("controls-sidebar", (el) => {
    const { getState: getSelectedElement, publish: setSelectedElement } = useState<SelectedItem<unknown> | undefined>(el, undefined)
    useReceptor(el, ItemSelected, setSelectedElement)
    const selectedElement = getSelectedElement()
    const {getState, publish} = useState<SelectionState>(el, newState(selectedElement))
    const current = getState()
    if (!current.dirty && selectedElement && new Position(selectedElement.row, selectedElement.col).equals(current.position)) {
        publish({ 
            ...current, 
            elements: [...current.elements, {item: selectedElement.item, payload: selectedElement.payload}],
            dirty: selectedElement.item === "hexagon"
        })
    } else {
        publish(newState(selectedElement))
    }

    useOnce(el, () => {
        setTimeout(() => {
            releaseHormone(SidebarLoaded)
        }, 1)
    })

    return html`
        ${getState().elements.map(element => {
            switch (element.item) {
                case buildings.castleSmall.name:
                    return html`<sidebar-castle 
                        .selected="${{row: getState().position?.row, col: getState().position?.col, payload: element.payload}}">
                    </sidebar-castle>`
                case player.knight.name:
                    return html`<sidebar-knight
                        .selected="${{row: getState().position?.row, col: getState().position?.col, payload: element.payload}}">
                    </sidebar-knight>`
                case player.wagon.name:
                    return html`<sidebar-wagon
                        .selected="${{row: getState().position?.row, col: getState().position?.col, payload: element.payload}}">
                    </sidebar-wagon>`
                default:
                    case buildings.castleSmall.name:
                    return html``
            }
        })}
    `
})