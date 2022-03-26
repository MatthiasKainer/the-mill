import { css, html } from "lit";
import { releaseHormone } from "organismus";
import { LitElementWithProps, pureLit } from "pure-lit";
import { FigherAsset } from "../../game";
import { MoveModeActivate } from "../../game/world/events";
import { text, texts } from "../../internationalization";
import { asNumber } from "../../math/number";
import { sidebarBaseCSS } from "./sidebar.style";

type Props = {
    selected : { 
        payload: FigherAsset
        col: number
        row: number
    }
}

const style = css`
    .container {
        grid-template-areas: 
            "knight knight health health health"
            "knight knight stats stats stats"
            "knight knight move attack fortify";
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
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
`
export default pureLit("sidebar-knight", (_: LitElementWithProps<Props>) => {
    const { selected: { payload, row, col } } = _;
    const {health, actions} = payload
    const start = {
        row: asNumber(row),
        col: asNumber(col)
    }
    return html`
    <h3>${text(texts.assets.knight)}</h3>
    <div class="container">
        <img id="knight" src="/assets/knight_${payload.team}.png">
        <health-bar id="health" .health="${health}"></health-bar>
        <stats-bar id="stats" .health="${health}" .actions="${actions}"></stats-bar>
        <button ?disabled=${actions.current < 1} id="move" title="${text(texts.assets.properties.actions.move)}" @click=${() => releaseHormone(MoveModeActivate, { asset: { ...payload }, start })}>🦵</button>
        <button-attack id="attack" .actions="${actions}" .asset="${payload}" .position="${start}"></button-attack>
        <button ?disabled=${actions.current < 1} id="fortify" title="${text(texts.assets.properties.actions.fortify)}" >🏰</button>
    </div>`
},
    {
        styles: [
            sidebarBaseCSS,
            style
        ],
        props: [
            { "selected" : {type: Object}}
        ]
    })