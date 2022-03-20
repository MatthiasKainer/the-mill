import { css, html } from "lit";
import { pureLit } from "pure-lit";
import { baseResource } from "./base";

export default pureLit("resource-iron", () => {
    return html``
}, {
    styles: [
      css`
        :host {
          background-image: url("/assets/resources/iron.png");
        }
      `,
      baseResource,
    ],
})