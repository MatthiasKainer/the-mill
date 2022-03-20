import { html, LitElement } from "lit"
import { LitElementWithProps, pureLit } from "pure-lit"
import { modalCoreCss, modalHeaderCss } from "./modal.styles"

type Prop = {
    open: boolean
    preventClose: boolean
}

const trigger = (el: LitElement, event: string) => {
    el.dispatchEvent(new CustomEvent(event))
}

export default pureLit("modal-window", (el: LitElementWithProps<Prop>) => {
    return el.open ? html`
    <div id="background" @click="${() => el.preventClose && trigger(el, "close")}"></div>
    <div id="modal">
        <header>
            ${el.preventClose ? html`` : html`<button-pure id="close" @click="${() => trigger(el, "close")}"><text-block size="large">X</text-block></button-pure>`}
            <slot name="header"></slot>
        </header>
        <div>
            <slot></slot>
        </div>
        <slot name="footer"></slot>
    </div>
    ` : html``
}, {
    styles: [modalCoreCss, modalHeaderCss],
    defaults: {
        open: false,
        preventClose: false
    }
})
