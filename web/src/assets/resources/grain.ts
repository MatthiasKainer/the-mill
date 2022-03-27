import { css, html } from "lit";
import { pureLit } from "pure-lit";
import { text, texts } from "../../internationalization";
import { baseResource } from "./base";

export default pureLit(
  "resource-grain",
  () => {
    return html`<div title="${text(texts.resources.grain)}"></div>`;
  },
  {
    styles: [
      css`
        :host {
          background-image: url("assets/resources/grain.png");
        }
      `,
      baseResource,
    ]
  }
);
