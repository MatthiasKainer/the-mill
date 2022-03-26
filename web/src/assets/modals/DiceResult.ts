import { html, css } from "lit"
import { useReceptor } from "organismus"
import { pureLit, useState } from "pure-lit"
import { FigherAsset } from "../../game"
import { ModalDiceResultOpen } from "../../game/world/events"

export default pureLit("modal-dice-result", (el) => {
    const { get, set } = useState<ModalDiceResultOpen | undefined>(el, undefined)
    useReceptor(el, ModalDiceResultOpen, set)
    return html`
   <modal-window 
        .open=${get() ? true : false} 
        @close=${() => set(undefined)}>
        <h1 slot="header">Gewürfelt!</h1>
        <div class="body">
        ${get()?.attacker.map(_ => {
            const player = _ as FigherAsset;
            return html`
                    <div class="attacker">
                        <fighter-info 
                            .player=${player} 
                            row="${get()!.location.row}" 
                            col="${get()!.location.col}">
                        </fighter-info>
                    </div>
                `
        })
        }${get()?.defender.map(_ => {
            const player = _ as FigherAsset;
            return html`
                    <div class="defender">
                        <fighter-info 
                            .player=${player} 
                            row="${get()!.location.row}" 
                            col="${get()!.location.col}">
                        </fighter-info>
                    </div>
                `
        })
        }
        ${get() ? html`<dice-roll class="dice" result="${get()!.result}"></dice-roll>` : html``}
        </div>

        <p slot="footer">
        </p>
    </modal-window>`
}, {
    styles: [
        css`
        .body {
            display: grid;
            grid-template-areas: 
                "attacker defender"
                "dice dice";
        }
        .body > * {
            display: block;
        }
        .attacker {
            grid-area: attacker;
        }
        .defender {
            grid-area: defender;
        }
        .dice {
            grid-area: dice;
        }
        `
    ]
})