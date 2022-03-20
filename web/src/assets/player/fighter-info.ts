import { css, html } from "lit";
import { pureLit } from "pure-lit";
import { FigherAsset } from "../../game";
import { spriteFactory } from "../sprites";

type Props = {
    player: FigherAsset,
    row: number,
    col: number
}

export default pureLit("fighter-info", ({player, row, col}: Props) => {
    return html`<div class="sprite ${player?.health.current < 1 ? "dead" : "alive"}">
            ${spriteFactory(player ? [player] : [], row, col)}
        </div>
        <div class="info">
            <h3>Gesundheit</h3>
            <loading-bar width="${(player?.health.current / player?.health.max) * 100}%"></loading-bar>
            <p>${player?.health.current} von ${player?.health.max}</p>
        </div>`;
}, {
    styles: [
        css`
        :host {
            display: grid;
            grid-template-columns: 1fr 3fr;
        }
        .sprite {
            height: 140px;
        }
        @keyframes rotation {
            from {
                transform: rotate(0deg);
            }
            to {
                transform: rotate(-90deg);
            }
        }
        .dead {
            animation: rotation 5s 1;
            animation-fill-mode: forwards;
        }
        `
    ],
    props: [{
        player: { type: Object },
        row: {type: Number},
        col: {type: Number}
    }]
})