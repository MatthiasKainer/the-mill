import { html } from "lit"

import { css } from "nested-css-to-flat/lit-css"
import { releaseHormone, useReceptor } from "organismus"
import { pureLit, useState } from "pure-lit"
import { FigherAsset } from "../../game"
import { Dice } from "../../game/player/dices/dice"
import { BattleThrowDice, ModalBattleOpen } from "../../game/world/events"

export default pureLit("modal-battle", (el) => {
    const { get, set } = useState<ModalBattleOpen | undefined>(el, undefined)
    const { get: getSelectedDice, set: setSelectedDice } = useState<Dice | undefined>(el, undefined)
    useReceptor(el, ModalBattleOpen, set)
    return html`
   <modal-window 
        .open=${get() ? true : false} 
        preventClose>
        <h1 slot="header">Kampf beginnt!</h1>
        <div class="body">
        ${get()?.attacker.map(_ => {
            const player = _ as FigherAsset;
            return html`
                    <div>
                        <fighter-info 
                            .player=${player} 
                            row="${get()!.location.row}" 
                            col="${get()!.location.col}">
                        </fighter-info>
                        <h3>Wähle deine Waffe</h3>
                        <div class="dices">
                            <dice-selector .dices="${player.dices}" @select="${(dice: CustomEvent<Dice>) => setSelectedDice(dice.detail)}"></dice-selector>
                        </div>
                    </div>
                `
        })
        }${get()?.defender.map(_ => {
            const player = _ as FigherAsset;
            return html`
                    <div>
                        <fighter-info 
                            .player=${player} 
                            row="${get()!.location.row}" 
                            col="${get()!.location.col}">
                        </fighter-info>
                    </div>
                `
        })
        }
        </div>
        <p slot="footer">
            <button @click="${() => releaseHormone(BattleThrowDice, {
                attacker: {
                    asset: get()?.attacker[0],
                    dices: [getSelectedDice()]
                },
                defender: get()?.defender[0],                
                location: {row: get()!.location.row, col: get()!.location.col},
            })}" ?disabled="${getSelectedDice() === undefined}">Würfeln</button>
        </p>
    </modal-window>`
}, {
    styles: [
        css`.body {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: auto;
            & > * {
                display: block;
            }
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
            & .current {
                background-image: url('assets/knight/health.png');
                background-size: contain;
                background-repeat: no-repeat;
                height: 15px;
            }
        }
        `
    ]
})