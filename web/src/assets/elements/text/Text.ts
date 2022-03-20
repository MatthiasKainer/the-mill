import { css, html } from "lit";
import { pureLit } from "pure-lit";

type Props = {
    size: "small" | "medium" | "large"| "x-large"
    type: "inline" | "paragraph"
}

const sizes = css`
    .small {
        font-size: 0.75rem;
    }
    .medium {
        font-size: 1rem;
    }
    .large {
        font-size: 1.5rem;
    }
    .x-large {
        font-size: 2rem;
    }
`
const type = css`
    .inline {
        display: inline;
    }
    .paragraph {
        display: block;
    }
`

export default pureLit("text-block", ({size, type}: Props) => {
    return html`<span class="${size} ${type}"><slot></slot></span>`
}, {
    styles: [sizes, type],
    defaults: {
        size: "medium",
        type: "inline"
    }
})