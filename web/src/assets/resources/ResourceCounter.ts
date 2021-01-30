import { css, html } from "lit-element";
import { pureLit } from "pure-lit";

type Props = {
    count: number
}

export default pureLit("resource-counter", ({count}: Props) => {
    return html`
        <slot></slot>
        ${count}
    `
}, {
    styles: [
        css`
        :host {
            font-size: 4vh;
        }
        `
    ],
    props: [{
        count: {type: Number}
    }]
})