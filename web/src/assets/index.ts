import { html, css } from "lit"
import { releaseHormone } from "organismus"
import { pureLit } from "pure-lit"
import { load } from "../game"
import { Abort } from "../game/world/events"
import { sidebar, sidebarFor } from "./styles"

export * from "./elements"
export * from "./player/"
export * from "./map/"
export * as buildings from "./buildings/"
export * as player from "./player/"
export * from "./sidebar/sidebar"
export * from "./modals"
export * from "./footer"
export * from "./header"

document.querySelector("body")?.addEventListener("keyup", function (e) {
    if (e.key === "Escape") {
        releaseHormone(Abort, true)
    }
})

export default pureLit("the-mill", () => {
    load({ rows: 10, cols: 10 })
    return html`
    <controls-sidebar>sidebar</controls-sidebar>
    <map>
        <header-element>header</header-element>
        <world-map></world-map>
        <footer-element>
        </footer-element>
        <modals-all></modals-all>
    </map>

    `
}, {
    styles: [
        sidebar,
        sidebarFor(css`world-map`),
        sidebarFor(css`controls-sidebar`),
        css`
    header-element {
        grid-area: header;
    }
    world-map {
        grid-area: main;
        min-height: 85vh;
        max-height: 85vh;
        overflow: auto;
        scroll-behavior: smooth;
        background-color: #87CEFA;
    }
    
    footer-element {
        grid-area: footer;
    }
    
    map {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        grid-template-rows: auto;
        grid-template-areas: 
            "header header header header header"
            "main main main main main"
            "footer footer footer footer footer";
        }
    :host {
        position: relative;
        display: block;
    }
    `]
})