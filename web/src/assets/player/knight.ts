import { css, html } from "lit"
import { useReceptor } from "organismus"
import { LitElementWithProps, pureLit, useState } from "pure-lit"
import { TurnAccepted } from "../../game/world/events"
import { inactive, sprite } from "../styles"
import {assets} from "./assetsConsts"

export const name = assets.knight;

type Props = {
    team: string
}

export default pureLit(name, (el: LitElementWithProps<Props>) => {
    const { get: getState, set: publish } = useState(el, "")
    useReceptor(el, TurnAccepted, publish)
    return html`<div class="${getState() === el.team ? "active" : "inactive"}" style="background-image:url('assets/knight_${el.team}.png'"></div>`
},
{
    styles: [
        sprite,
        inactive,
        css`
        div {
            background-size: contain;
            opacity: 1;
        }
        `
    ],
    defaults: {
        team: "",
    }
})