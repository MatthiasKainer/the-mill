import { css, html } from "lit";
import { pureLit } from "pure-lit";
import { text, texts } from "../../internationalization";
import { baseResource } from "./base";

export default pureLit("resource-iron", () => {
    return html`<div title="${text(texts.resources.iron)}"></div>`
}, {
    styles: [
      css`
        :host {
          background-image: url("/assets/resources/iron.png");
        }
      `,
      baseResource,
    ]
})