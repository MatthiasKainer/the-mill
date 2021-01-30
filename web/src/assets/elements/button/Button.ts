import { css, html } from "lit-element";
import { pureLit } from "pure-lit";


export default pureLit("button-pure", () => {
    return html`<button>
        <slot></slot>
    </button>`
}, {
    styles: css`
    
    button {
        background: none;
        border: none;
        margin: 0;
        padding: 0;
        cursor: pointer;
    }
     img {
        margin: 3px;
        width: 64px;
        height: 64px;
    }
    `
})