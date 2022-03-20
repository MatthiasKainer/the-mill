import { html } from "lit";
import { pureLit } from "pure-lit";
import { styles } from "./dice.style";

type Prop = {
    result: number
}

export default pureLit("dice-roll", ({result}: Prop) => 
    html`<div id="cube">
        <div id="side1"></div>
        <div id="side2"></div>
        <div id="side3">${result}</div>
        <div id="side4"></div>
        <div id="side5"></div>
        <div id="side6"></div>
    </div>`
, {
    styles,
    props: [{
        result: {type: Number}
    }]
})