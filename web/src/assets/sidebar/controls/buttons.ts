import { html } from "lit"
import { releaseHormone } from "organismus"
import { pureLit } from "pure-lit"
import { Actions, MoveableAsset, SimpleCoords } from "../../../game"
import { BattleModeActivate } from "../../../game/world/events"
import { text, texts } from "../../../internationalization"

type Props = {
    actions: Actions,
    asset: MoveableAsset,
    position: SimpleCoords,
}

export const buttonAttack = pureLit("button-attack", ({actions, asset, position}: Props) => {
    return html`<button ?disabled=${actions.current < 1} id="attack" title="${text(texts.assets.properties.actions.attack)}" @click=${() => releaseHormone(BattleModeActivate, { asset: { ...asset }, start: position })}>⚔</button>
    `
})