import { css, html, LitElement } from "lit";
import { useReceptor } from "organismus";
import { pureLit, useState } from "pure-lit";
import { World, WorldLoaded } from "../../game";
import { HEXAGON_WIDTH } from "./consts";

export default pureLit("world-map", (el: LitElement) => {
    const { get: getWorld, set: setWorld } = useState<World | undefined>(el, undefined)
    useReceptor(el, WorldLoaded, setWorld)

    return html`<div id="globe">${
        getWorld()?.map.map((rows, row) => 
            html`<div class="row ${row % 2 === 0 ? "push" : ""}" style="width: calc(${HEXAGON_WIDTH * rows.length}px + 20rem)">
                ${rows.map((tile, col) => 
                    html`<hexagon-element 
                        .background=${tile.terrain.sprite} 
                        .elements="${tile.elements}" 
                        row="${row}" col="${col}">
                    </hexagon-element>`)}
            </div>
            `
        )
    }</div>`
}, {
    styles: css`
    :host {
        display:block;
    }
    #globe {
        padding: 20rem;
    }
    .row {
        margin-bottom: -41px;
        white-space: nowrap;
    }
    .push {
        margin-left: 60px;
    }`
})