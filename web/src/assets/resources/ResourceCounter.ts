import { css, html } from "lit";
import { pureLit } from "pure-lit";

type Props = {
    count: number,
    collect: number | undefined,
}

export default pureLit("resource-counter", ({count, collect}: Props) => {
    return html`
        <slot></slot>
        ${count} ${collect ? html`<span>(+${collect})</span>` : ""}
    `
}, {
    styles: [
        css`
        :host {
            font-size: 4vh;
        }
        span {
            font-size: smaller;
        }
        `
    ],
    defaults : {
        count: 0,
        collect: undefined,
    }
})