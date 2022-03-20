import { html } from "lit"
import { pureLit } from "pure-lit"

export * from "./Battle"
export * from "./DiceResult"
export * from "./MillTaken"
export * from "./NoMoreTurns"

export default pureLit("modals-all", () => {
    return html`
    <modal-no-more-turns></modal-no-more-turns>
    <modal-battle></modal-battle>
    <modal-dice-result></modal-dice-result>
    <modal-mill-taken></modal-mill-taken>`
})