import { css, html } from "lit";
import { LitElementWithProps, pureLit } from "pure-lit";
import { Asset } from "../../game";
import { sidebarBaseCSS } from "./sidebar.style";

type Props = {
    selected : { 
        payload: Asset
        col: number
        row: number
    }
}

const style = css`
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
        styles: [
            sidebarBaseCSS,
            style
        ],
        props: [
            { "selected" : {type: Object}}
        ]
    })