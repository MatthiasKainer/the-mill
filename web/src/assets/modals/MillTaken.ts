import { css, html } from "lit"
import { useReceptor } from "organismus"
import { pureLit, useState } from "pure-lit"
import { AssetTaken, MillTakeover } from "../../game/world/events"

export default pureLit("modal-mill-taken", (el) => {
    const { get, set } = useState<AssetTaken | undefined>(el, undefined)
    useReceptor(el, MillTakeover, set)
    return html`
    <modal-window 
         .open=${get() ? true : false} 
         @close=${() => set(undefined)}>
         <h1 slot="header">Mühle übernommen!</h1>
         <div class="body">
            <div class="by">
                <fighter-info 
                    .player=${get()?.by} 
                    .row="${get()?.location.row}" 
                    .col="${get()?.location.col}">
                </fighter-info>
            </div>
            <div class="mills">
                <building-mill .team="${get()?.transfered.to}" class="after"></building-mill>
                <building-mill .team="${get()?.transfered.from}" class="before"></building-mill>
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