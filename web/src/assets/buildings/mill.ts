import { css, html } from "lit-element";
import { pureLit } from "pure-lit";
import { sprite } from "../styles";

export const name = "building-mill"

type Props = {
    team?: string
}

export default pureLit(name, ({ team }: Props) => {
    return html`<div style="background-image:url('/assets/windmill_complete_${team ?? "none"}.png'"></div>`
},
{
    styles: [
        sprite,
        css`
        div {
            width: 80%;
            height: 80%;
        }
        `
    ],
    defaults: {
        team: undefined
    }
})