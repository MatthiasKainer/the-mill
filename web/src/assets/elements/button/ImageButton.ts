import { css, html } from "lit";
import { LitElementWithProps, pureLit } from "pure-lit";

type Props = {
    src: string
    height: string
}

export default pureLit("button-image", (el: LitElementWithProps<Props>) => {
    const style = el.height ? `height:${el.height};` : ""
    return html`<button style="${style}; background-image: url('${el.src}'), url('assets/sidebar/btn_1.png')">
        <slot></slot>
    </button>`
}, {
    styles: css`
    button {
        background: none;
        border: none;
        margin: 0;
        padding: 0;
        background-image: url('assets/sidebar/btn_1.png');
        background-size: contain;
        height: 70px;
        background-repeat: no-repeat;
        cursor: pointer;
        padding-left: 33%; 
        width: 85%;
    }
    slot {
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-between;
    }
    `,
    defaults: {
        src: "",
        height: ""
    }
})