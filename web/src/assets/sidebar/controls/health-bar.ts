import { html } from "lit"
import { pureLit } from "pure-lit"
import { Health } from "../../../game"

export default pureLit("health-bar", ({ health: {current, max}}: {health: Health}) => 
    html`<loading-bar id="health" width="${(current / max) * 100}%"></loading-bar>`
)