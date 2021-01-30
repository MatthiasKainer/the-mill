import { html } from "@open-wc/testing-helpers";
import { css } from "lit-element";
import { useState } from "lit-element-state-decoupler";
import { useReceptor } from "organismus";
import { pureLit } from "pure-lit";
import { Player, Team } from "../../game";
import { PlayerUpdate, TurnAccepted } from "../../game/world/events";

import '../resources'

export default pureLit("header-element", (el) => {
    const {getState: getCurrentTeam, publish: setCurrentTeam} = useState<Team | undefined>(el, undefined)
    const {getState: getCurrentPlayer, publish: setCurrentPlayer} = useState<Player | undefined>(el, undefined)
    useReceptor(el, TurnAccepted, setCurrentTeam)
    useReceptor(el, PlayerUpdate, setCurrentPlayer)
    const player = getCurrentPlayer() ?? { resources: {}} as Player
    return html`<header class="${getCurrentTeam()!}">
        <resource-counter count="${player.resources.hay}">
            <resource-hay></resource-hay>
        </resource-counter>
        <resource-counter count="${player.resources.grain}">
            <resource-grain></resource-grain>
        </resource-counter>
        <resource-counter count="${player.resources.stone}">
            <resource-stone></resource-stone>
        </resource-counter>
        <resource-counter count="${player.resources.iron}">
            <resource-iron></resource-iron>
        </resource-counter>
        <resource-counter count="${player.resources.log}">
            <resource-log></resource-log>
        </resource-counter>
    </header>`
}, {
    styles: css`
    header {
        min-height: 5vh;
        max-height: 5vh;
        background-size: 200% 100%;
        transition: background-position 2s;
        background-image: 
            linear-gradient(to right, #178044 0%, white 50%, #A95C44 100%);
    }
    .green {
        background-position: 0% 0%;
    }
    .red {
        background-position: 100% 0%;
    }`
})