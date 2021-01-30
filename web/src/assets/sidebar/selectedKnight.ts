import { css, html } from "lit-element";
import { releaseHormone } from "organismus";
import { LitElementWithProps, pureLit } from "pure-lit";
import { FigherAsset } from "../../game";
import { BattleModeActivate, MoveModeActivate } from "../../game/world/events";
import { asNumber } from "../../math/number";

type Props = {
    selected : { 
        payload: FigherAsset
        col: number
        row: number
    }
}

const style = css`
    :host {
        display: block;
        background-image: url('/assets/sidebar/bg.png');
        background-size: 100% 100%;
        background-repeat: no-repeat;
        padding: 15px;
    }
    .container {
        display: grid;
        grid-template-areas: 
            "knight knight health health health"
            "knight knight stats stats stats"
            "knight knight move attack fortify";
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        column-gap: 10px;
        row-gap: 15px;
        margin: 15px;
    }
    button {
        cursor: pointer;
    }
    #knight {
        grid-area: knight;
    }
    #health {
        grid-area: health;
    }
    #attack {
        grid-area: attack;
    }
    #stats {
        grid-area: stats;
    }
    img {
        width: 100%;
    }
    h3 {
        color: var(--colorMain)
    }
`
export default pureLit("sidebar-knight", (_: LitElementWithProps<Props>) => {
    const { selected: { payload, row, col } } = _;
    const {health, actions} = payload
    const start = {
        row: asNumber(row),
        col: asNumber(col)
    }
    return html`
    <h3>Ritter</h3>
    <div class="container">
        <img id="knight" src="/assets/knight_${payload.team}.png">
        <loading-bar id="health" width="${(health.current / health.max) * 100}%"></loading-bar>
        <div id="stats">
            <strong>Leben</strong> ${health.current} von ${health.max} 
            <strong>Aktionen:</strong> ${actions.current} von ${actions.max}
        </div>
        <button ?disabled=${actions.current < 1} id="move" @click=${() => releaseHormone(MoveModeActivate, { asset: { ...payload }, start })}>🦵</button>
        <button ?disabled=${actions.current < 1} id="attack" @click=${() => releaseHormone(BattleModeActivate, { asset: { ...payload }, start })}">⚔</button>
        <button ?disabled=${actions.current < 1} id="fortify">🏰</button>
    </div>`
},
    {
        styles: [style],
        props: [
            { "selected" : {type: Object}}
        ]
    })