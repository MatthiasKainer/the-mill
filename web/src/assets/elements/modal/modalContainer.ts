import { html } from "lit-element"
import { useState } from "lit-element-state-decoupler"
import { pureLit } from "pure-lit"

export default pureLit("modal-container", (el) => {
    const { getState: modalOpen, publish: modalSetOpen } = useState(el, false)
    return html`
        <button-pure @click="${() => modalSetOpen(true)}"><slot></slot></button-pure>
        <modal-window .open=${modalOpen()} @close=${() => modalSetOpen(false)}>
            <slot slot="header" name="header"></slot>
            <slot name="body"></slot>
            <slot slot="footer" name="footer"></slot>
        </modal-window>
    `
})