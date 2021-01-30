import { css, html } from "lit-element";
import { LitElementWithProps, pureLit } from "pure-lit";
import { Dice } from "../../../game/player/dices/dice";

type Props = {
    dices?: Dice[]
}

export default pureLit("dice-selector", (el: LitElementWithProps<Props>) => {
    return html`${el.dices?.map(dice => html`<div>
        <input type="radio" 
            @click=${() => el.dispatchEvent(new CustomEvent("select", { detail: dice }))}
            id="${dice.name}" 
            name="dice" 
            value="${dice.name}">
        <label for="${dice.name}">
            <strong>${dice.name}</strong> - ${dice.story}
            <div class="sides" style="grid-template-columns: 1fr ${dice.sides.map(() => "1fr").join(" ")};">
                <h5>Würfelergebnisse</h5>
                ${dice.sides.map(side => html`<div class="side">${side.value}</div>`)}
            </div>
        </label>
    </div>`)}`
},
    {
        styles: css`
        .sides {
            display: grid;
            padding: 0.5rem;
        }
        h5 {
            margin: 0;
        }
        .side {
            background-image: url("/assets/dice.png");
            background-size: contain;
            height: 1rem;
            background-repeat: no-repeat;
            background-position: center;
            text-align: center;
            padding-top: 0.25rem;
            font-size: 0.75rem;
        }
     `
    })