import { css, html } from "lit-element";
import { pureLit } from "pure-lit";
import { baseResource } from "./base";

export default pureLit(
  "resource-grain",
  () => {
    return html``;
  },
  {
    styles: [
      css`
        :host {
          background-image: url("/assets/resources/grain.png");
        }
      `,
      baseResource,
    ],
  }
);
