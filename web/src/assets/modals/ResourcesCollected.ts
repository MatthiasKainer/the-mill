import { html, css } from "lit"
import { releaseHormone, useReceptor } from "organismus"
import { pureLit, useState } from "pure-lit"
import { PlayerNoActionsLeft, TurnPlayerComplete } from "../../game/world/events"

export default pureLit("modal-no-more-turns", (el) => {
    const { getState, publish } = useState<boolean | undefined>(el, undefined)
    useReceptor(el, PlayerNoActionsLeft, publish)
    return html`
   <modal-window 
        .open=${getState() ? true : false} 
        preventClose>
        <h1 slot="header">Keine Aktionen übrig.</h1>
        <div class="body">
            Du hast keine Aktionen mehr übrig. Willst du weiter geben, oder noch rum schauen?
        </div>
        <p slot="footer">
            <button @click="${() => (releaseHormone(TurnPlayerComplete), publish(false))}">Zug beenden</button>
            <button @click="${() => publish(false)}">Noch rumschauen</button>
        </p>
    </modal-window>`
}, {
    styles: [
        css`
        .body {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: auto;
        }
        .body > * {
            display: block;
        }
        .player-info {
            display: grid;
            grid-template-columns: 1fr 3fr;
        }
        .sprite {
            height: 140px;
        }
        .health-bar {
            background-image: url('assets/knight/health-bg.png');
            background-size: contain;
            background-repeat: no-repeat;
            height: 15px;
        }
        .health-bar .current {
            background-image: url('assets/knight/health.png');
            background-size: contain;
            background-repeat: no-repeat;
            height: 15px;
        }
        `
    ]
})