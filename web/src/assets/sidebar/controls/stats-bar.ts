import { html } from "lit";
import { unsafeHTML } from "lit/directives/unsafe-html";
import { pureLit } from "pure-lit";
import { Actions, Health } from "../../../game";
import { text, texts } from "../../../internationalization";

type Props = { 
    health: Health
    actions: Actions
}

export default pureLit("stats-bar", ({health, actions}: Props) => 
    html`${unsafeHTML(text(texts.assets.properties.life, health.current, health.max))}<br>
    ${unsafeHTML(text(texts.assets.properties.actions, actions.current, actions.max))}`
)