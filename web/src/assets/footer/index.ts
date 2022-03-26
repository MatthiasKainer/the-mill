import { css, html } from "lit";
import { releaseHormone, useReceptor } from "organismus";
import { pureLit, useState } from "pure-lit";
import { Asset, isMoveableAsset, Team } from "../../game";
import { UpdateAllPlayerElements, TurnAccepted, TurnPlayerComplete } from "../../game/world/events";
import { spriteGridFactory } from "../sprites";
import { sidebar, sidebarFor } from "../styles";

export default pureLit("footer-element", (el) => {
    const {get: getTeam, set: setTeam} = useState<Team | undefined>(el, undefined)
    const {get: getAssets, set: setAssets} = useState<Asset[]>(el, [])
    useReceptor(el, TurnAccepted, setTeam)
    useReceptor(el, UpdateAllPlayerElements, setAssets)
    return html`<footer class="${getTeam()!}">
    <div class="main ">
        ${spriteGridFactory(getAssets()
            .sort((a, b) => a.name.localeCompare(b.name))
            .filter(asset => isMoveableAsset(asset) && asset.actions.current > 0), 
            "width: 10vh; height: 10vh;")}
    </div>
    <div class="action">
        <button-pure @click="${() => releaseHormone(TurnPlayerComplete)}">
            <text-block type="paragraph" size="x-large">⌛</text-block> Zug beenden
        </button-pure>
    </div>
</footer>`
}, {
    styles: [
        sidebar,
        sidebarFor(css`footer .main`),
        css`
    footer {
        min-height: 10vh;
        max-height: 10vh;
        display: grid;
        grid-template-columns: 3fr 1fr;
        grid-template-rows: auto;
        grid-template-areas: 
            "main action";
        padding-left: 5vw;
        padding-right: 5vw;
    }
    footer .main {
        grid-area: main;
        transition: background-color 2s;
        min-height: 10vh;
        max-height: 10vh;
        overflow-x: auto;
    }
    footer.red {
        background-color: #A95C44;
    }
    footer.green {
        background-color: #178044;
    }
    footer .action {
        grid-area: action;
        place-self: center;
    }`]
})