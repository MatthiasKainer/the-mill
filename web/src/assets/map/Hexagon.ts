import { html } from 'lit';
import { releaseHormone, useReceptor } from 'organismus';
import { LitElementWithProps, pureLit, useOnce, useState } from 'pure-lit';
import { MoveModeActivate, MoveModeEnd, HexagonUpdated, HexagonUpdatedPayload, ItemSelected, MoveModeData, MoveModeTargetHovered, BattleModeActive, BattleModeDeactivate, MoveModeDeactivate, BattleModeData } from '../../game/world/events';
import { Sprite } from '../../game/world/sprite';
import { spriteFactory } from '../sprites';
import { Asset, SimpleCoords } from '../../game';
import * as movement from './Hexagon.movement';
import * as battle from './Hexagon.battle';
import { cssHexagon, cssHexagonMovement } from './Hexagon.styles';
import { SimpleCoordsEquals } from '../../math/position';

type Props = {
    background: Sprite | undefined
    elements: Asset[]
    row: number
    col: number
}

const getCssClass = (hexagon: SimpleCoords, moveMode: MoveModeData | undefined, battleMode: BattleModeData | undefined) => {
    return `${movement.getCssClass(hexagon, moveMode)} ${battle.getCssClass(hexagon, battleMode)}`
}
const click = (hexagon: SimpleCoords, moveMode: MoveModeData | undefined, battleMode: BattleModeData | undefined) => {
    if (moveMode && moveMode.end && SimpleCoordsEquals(moveMode.end, hexagon)) {
        movement.click(hexagon, moveMode)
    } else if (battleMode) {
        battle.click(hexagon, battleMode)
    }
}

export default pureLit('hexagon-element', (el: LitElementWithProps<Props>) => {
    useOnce(el, () => {
      el.addEventListener("click", () => releaseHormone(ItemSelected, {item: "hexagon", row: el.row, col: el.col}))
    })

    const {row, col} = el;
    const { getState: getElements, publish: setElements } = useState<HexagonUpdatedPayload>(el, {elements: el.elements, row, col})
    const { getState: getMovementMode, publish: setMovementMode } = useState<MoveModeData | undefined>(el, undefined)
    const { getState: getBattleMode, publish: setBattleMode } = useState<BattleModeData | undefined>(el, undefined)
    useReceptor(el, HexagonUpdated, (h) => (h?.row.toString() === row.toString() && h?.col.toString() === col.toString()), setElements)
    useReceptor(el, MoveModeActivate, setMovementMode)
    useReceptor(el, BattleModeActive, setBattleMode)
    useReceptor(el, MoveModeEnd, () => setMovementMode(undefined))
    useReceptor(el, MoveModeDeactivate, () => setMovementMode(undefined))
    useReceptor(el, BattleModeDeactivate, () => setBattleMode(undefined))

    const update = getElements()
    
    return html`<div 
      class="hexagon ${getCssClass(el, getMovementMode(), getBattleMode())}" 
      @mouseover=${() => { if (getMovementMode()) {releaseHormone(MoveModeTargetHovered, {row, col})} }}
      @click=${() => (click(el, getMovementMode(), getBattleMode()), document.dispatchEvent(new CustomEvent("hello-world", { detail: { hello: "world"}})))}
      style="background-image:url(/assets/${el.background?.file}.png); background-position: ${el.background?.x}px ${el.background?.y}px;">
      ${spriteFactory(update.elements, el.row, el.col)}</div>`
}, {
    styles: [cssHexagon, cssHexagonMovement],
    defaults: {
        background: undefined,
        elements: [],
        col: 0,
        row: 0
    }
}

)
