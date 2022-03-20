import { css, html } from "lit";
import { pureLit } from "pure-lit";
import { text, texts } from "../../internationalization";
import { baseResource } from "./base";

export default pureLit(
  "resource-hay",
  () => {
    return html`<div title="${text(texts.resources.hay)}"></div>`;
  },
  {
    styles: [
      css`
        :host {
          background-image: url("/assets/resources/hay.png");
        }
      `,
      baseResource,
    ]
  }
);
