import { css, html } from "lit";
import { releaseHormone } from "organismus";
import { LitElementWithProps, pureLit } from "pure-lit";
import { FigherAsset } from "../../game";
import { BuildLumberjackSmall, BuildMineSmall, MoveModeActivate } from "../../game/world/events";
import { text, texts } from "../../internationalization";
import { asNumber } from "../../math/number";

type Props = {
    selected: {
        payload: FigherAsset
        col: number
        row: number
    }
}

const style = css`
    :host {
        display: block;
        background-image: url('assets/sidebar/bg.png');
        background-size: 100% 100%;
        background-repeat: no-repeat;
        padding: 15px;
    }
    .container {
        display: grid;
        grid-template-areas: 
            "wagon wagon health health health"
            "wagon wagon stats stats stats"
            "move build_1 build_2 build_3 load";
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
    #move {
        grid-area: move;
    }
    #load {
        grid-area: load;
    }
    #build_lumberjack {
        grid-area: build_1;
    }
    #build_mine {
        grid-area: build_2;
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
export default pureLit("sidebar-wagon", (_: LitElementWithProps<Props>) => {
    const { selected: { payload, row, col } } = _;
    const { health, actions } = payload
    const start = {
        row: asNumber(row),
        col: asNumber(col)
    }
    return html`
    <h3>${text(texts.assets.wagon)}</h3>
    <div class="container">
        <img id="wagon" src="assets/wagon_${payload.team}.png">
        <health-bar id="health" .health="${health}"></health-bar>
        <stats-bar id="stats" .health="${health}" .actions="${actions}"></stats-bar>
        <button ?disabled=${actions.current < 1} id="move"  title="${text(texts.assets.properties.actions.move)}" @click=${() => releaseHormone(MoveModeActivate, { asset: { ...payload }, start })}>🦵</button>
        <button ?disabled=${actions.current < 1} id="build_lumberjack" title="${text(texts.assets.properties.actions.build.lumberjack_small)}" @click=${() => releaseHormone(BuildLumberjackSmall, { asset: { ...payload }, position: start })}>
            <img id="build_lumberjack_small" src="assets/lumberjack_small_${payload.team}.png">
        </button>
        <button ?disabled=${actions.current < 1} id="build_mine" title="${text(texts.assets.properties.actions.build.mine_small)}" @click=${() => releaseHormone(BuildMineSmall, { asset: { ...payload }, position: start })}>
            <img id="build_mine_small" src="assets/mine_small_${payload.team}.png">
        </button>
        <button ?disabled=${actions.current < 1} id="load"  title="${text(texts.assets.properties.actions.load)}">📦</button>
    </div>`
},
    {
        styles: [style],
        props: [
            { "selected": { type: Object } }
        ]
    })