import { css, html } from "lit-element";
import { releaseHormone } from "organismus";
import { LitElementWithProps, pureLit } from "pure-lit";
import { Asset } from "../../game";
import { MoveModeActivate } from "../../game/world/events";
import { asNumber } from "../../math/number";

type Props = {
    selected : { 
        payload: Asset
        col: number
        row: number
    }
}

const style = css`
    :host {
        display: block;
        background-image: url('/assets/sidebar/bg.png');
        background-size: 100% 100%;
        background-repeat: no-repeat;
        padding: 15px;
    }
    .container {
        display: grid;
        grid-template-areas: 
            "mill mill health health health"
            "mill mill stats stats stats"
            "mill mill move attack fortify";
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
    #attack {
        grid-area: attack;
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
export default pureLit("sidebar-mill", (_: LitElementWithProps<Props>) => {
    const { selected: { payload } } = _;
    return html`
    <h3>Mühle</h3>
    <div class="container">
        <img id="mill" src="/assets/mill_${payload.team ?? "none"}.png">
    </div>`
},
    {
        styles: [style],
        props: [
            { "selected" : {type: Object}}
        ]
    })