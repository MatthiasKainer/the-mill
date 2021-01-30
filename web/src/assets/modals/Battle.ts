import { html } from "@open-wc/testing-helpers"
import { css } from "lit-element"
import { useState } from "lit-element-state-decoupler"
import { releaseHormone, useReceptor } from "organismus"
import { pureLit } from "pure-lit"
import { FigherAsset } from "../../game"
import { Dice } from "../../game/player/dices/dice"
import { BattleThrowDice, ModalBattleOpen } from "../../game/world/events"

export default pureLit("modal-battle", (el) => {
    const { getState, publish } = useState<ModalBattleOpen | undefined>(el, undefined)
    const { getState: getSelectedDice, publish: setSelectedDice } = useState<Dice | undefined>(el, undefined)
    useReceptor(el, ModalBattleOpen, publish)
    return html`
   <modal-window 
        .open=${getState() ? true : false} 
        preventClose>
        <h1 slot="header">Kampf beginnt!</h1>
        <div class="body">
        ${getState()?.attacker.map(_ => {
            const player = _ as FigherAsset;
            return html`
                    <div>
                        <fighter-info 
                            .player=${player} 
                            row="${getState()!.location.row}" 
                            col="${getState()!.location.col}">
                        </fighter-info>
                        <h3>Wähle deine Waffe</h3>
                        <div class="dices">
                            <dice-selector .dices="${player.dices}" @select="${(dice: CustomEvent<Dice>) => setSelectedDice(dice.detail)}"></dice-selector>
                        </div>
                    </div>
                `
        })
        }${getState()?.defender.map(_ => {
            const player = _ as FigherAsset;
            return html`
                    <div>
                        <fighter-info 
                            .player=${player} 
                            row="${getState()!.location.row}" 
                            col="${getState()!.location.col}">
                        </fighter-info>
                    </div>
                `
        })
        }
        </div>
        <p slot="footer">
            <button @click="${() => releaseHormone(BattleThrowDice, {
                attacker: {
                    asset: getState()?.attacker[0],
                    dices: [getSelectedDice()]
                },
                defender: getState()?.defender[0],                
                location: {row: getState()!.location.row, col: getState()!.location.col},
            })}" ?disabled="${getSelectedDice() === undefined}">Würfeln</button>
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
            background-image: url('/assets/knight/health-bg.png');
            background-size: contain;
            background-repeat: no-repeat;
            height: 15px;
        }
        .health-bar .current {
            background-image: url('/assets/knight/health.png');
            background-size: contain;
            background-repeat: no-repeat;
            height: 15px;
        }
        `
    ]
})