import { html, css } from "lit"
import { useReceptor } from "organismus"
import { LitElementWithProps, pureLit, useState } from "pure-lit"
import { TurnAccepted } from "../../game/world/events"
import { inactive, sprite } from "../styles"
import {assets} from "../assetsConsts"

export const name = assets.mine.small

type Props = {
    team: string
}

export default pureLit(name, (el: LitElementWithProps<Props>) => {
    const { get, set } = useState(el, "")
    useReceptor(el, TurnAccepted, set)
    return html`<div class="${get() === el.team ? "active" : "inactive"}" style="margin: 0; background-image:url('assets/mine_small_${el.team}.png'); background-size: auto; width: 100%; height: 100%;"></div>`
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