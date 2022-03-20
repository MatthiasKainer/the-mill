import { html, css } from "lit"
import { useReceptor } from "organismus"
import { pureLit, useState } from "pure-lit"
import { FigherAsset } from "../../game"
import { ModalDiceResultOpen } from "../../game/world/events"

export default pureLit("modal-dice-result", (el) => {
    const { getState, publish } = useState<ModalDiceResultOpen | undefined>(el, undefined)
    useReceptor(el, ModalDiceResultOpen, publish)
    return html`
   <modal-window 
        .open=${getState() ? true : false} 
        @close=${() => publish(undefined)}>
        <h1 slot="header">Gewürfelt!</h1>
        <div class="body">
        ${getState()?.attacker.map(_ => {
            const player = _ as FigherAsset;
            return html`
                    <div class="attacker">
                        <fighter-info 
                            .player=${player} 
                            row="${getState()!.location.row}" 
                            col="${getState()!.location.col}">
                        </fighter-info>
                    </div>
                `
        })
        }${getState()?.defender.map(_ => {
            const player = _ as FigherAsset;
            return html`
                    <div class="defender">
                        <fighter-info 
                            .player=${player} 
                            row="${getState()!.location.row}" 
                            col="${getState()!.location.col}">
                        </fighter-info>
                    </div>
                `
        })
        }
        ${getState() ? html`<dice-roll class="dice" result="${getState()!.result}"></dice-roll>` : html``}
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