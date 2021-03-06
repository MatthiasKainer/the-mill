import { html, css } from "lit"
import { useReceptor } from "organismus"
import { LitElementWithProps, pureLit, useState } from "pure-lit"
import { TurnAccepted } from "../../game/world/events"
import { inactive, sprite } from "../styles"

export const name = "building-castle-small"

type Props = {
    team: string
}

export default pureLit(name, (el: LitElementWithProps<Props>) => {
    const { get, set } = useState(el, "")
    useReceptor(el, TurnAccepted, set)
    return html`<div class="${get() === el.team ? "active" : "inactive"}" style="background-image:url('assets/castle_small_${el.team}.png'"></div>`
},
{
    styles: [
        sprite,
        inactive,
        css`
        :host {
            filter: hue-rotate(0deg);
        }
        `
    ],
    defaults: {
        team: "",
        row: undefined,
        col: undefined
    }
})