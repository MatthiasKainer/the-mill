import { css, html } from "lit-element"
import { useState } from "lit-element-state-decoupler"
import { useReceptor } from "organismus"
import { pureLit } from "pure-lit"
import { MillTaken, MillTakeover } from "../../game/world/events"

export default pureLit("modal-mill-taken", (el) => {
    const { getState, publish } = useState<MillTaken | undefined>(el, undefined)
    useReceptor(el, MillTakeover, publish)
    return html`
    <modal-window 
         .open=${getState() ? true : false} 
         @close=${() => publish(undefined)}>
         <h1 slot="header">Mühle übernommen!</h1>
         <div class="body">
            <div class="by">
                <fighter-info 
                    .player=${getState()?.by} 
                    .row="${getState()?.location.row}" 
                    .col="${getState()?.location.col}">
                </fighter-info>
            </div>
            <div class="mills">
                <building-mill .team="${getState()?.transfered.to}" class="after"></building-mill>
                <building-mill .team="${getState()?.transfered.from}" class="before"></building-mill>
            </div>
         </div>
         <p slot="footer">
         </p>
     </modal-window>`
}, {
    styles: css`
    .body {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }

    .mills {
        position: relative;
        justify-self: center;
    }
    .after {
        z-index: 1;
    }
    .before {
        z-index: 2;
        animation: fadeOut 5s 1;
        animation-fill-mode: forwards;
    }
    
    @keyframes fadeOut {
        0%   {	opacity: 1;	}
        100%   {	opacity: 0;	}
    }
    `
})