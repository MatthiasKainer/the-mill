import { css, html } from "lit";
import { pureLit } from "pure-lit";
import { baseResource } from "./base";

export default pureLit("resource-stone", () => {
    return html``
}, {
    styles: [
      css`
        :host {
          background-image: url("/assets/resources/stone.png");
        }
      `,
      baseResource,
    ],
})