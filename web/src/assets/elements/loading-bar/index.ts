import { html } from "lit";
import { pureLit } from "pure-lit";
import { style } from "./loading-bar.styles";

type Prop = {
    width: string
}

export default pureLit("loading-bar", ({width}: Prop) => {
    return html`
    <div class="progress-bar">
        <span class="bar">
            ${width === "0%" ? html`` : html`<span class="progress" style="width: ${width};"></span>`}
        </span>
    </div>
    `
}, {
    styles: [style],
    defaults: {
        width: "100%"
    }
})