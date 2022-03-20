import { html, css } from "lit";
import { useReceptor } from "organismus";
import { pureLit, useState } from "pure-lit";
import { Player, ResourceGeneratingBuilding, ResourceGenerator, RESOURCES, Team } from "../../game";
import { DistributeResources, PlayerUpdate, TurnAccepted } from "../../game/world/events";
import { text, texts } from "../../internationalization";

import '../resources'

export default pureLit("header-element", (el) => {
    const {get: getCurrentTeam, set: setCurrentTeam} = useState<Team | undefined>(el, undefined)
    const {get: getCurrentPlayer, set: setCurrentPlayer} = useState<Player | undefined>(el, undefined)
    const {get: getResources, set: setResources} = useState<DistributeResources | undefined>(el, undefined)
    useReceptor(el, TurnAccepted, setCurrentTeam)
    useReceptor(el, PlayerUpdate, setCurrentPlayer)
    useReceptor(el, DistributeResources, setResources)
    const player = getCurrentPlayer() ?? { resources: {}} as Player
    const applyResource = (map: any, resource: string, amount: number) => {
        map[resource] = (map[resource] || 0) + amount
        return map
    }
    const applyAllResources = (map: any, generator: ResourceGeneratingBuilding) => {
        for (const resource of RESOURCES) {
            map = applyResource(map, resource, (generator.resources as any)[resource]?.generatedResource ?? 0)
        }
        return map
    }
    const resources: ResourceGenerator = getResources()?.resourcesToGenerate.reduce(applyAllResources, {}) ?? {}
    return html`<header class="${getCurrentTeam()!}">
        <resource-counter title="${text(texts.resources.hay)}" count="${player.resources.hay}" collect=${resources.hay ?? 0}>
            <resource-hay></resource-hay>
        </resource-counter>
        <resource-counter title="${text(texts.resources.grain)}" count="${player.resources.grain}" collect=${resources.grain ?? 0}>
            <resource-grain></resource-grain>
        </resource-counter>
        <resource-counter title="${text(texts.resources.stone)}" count="${player.resources.stone}" collect=${resources.stone ?? 0}>
            <resource-stone></resource-stone>
        </resource-counter>
        <resource-counter title="${text(texts.resources.iron)}" count="${player.resources.iron}" collect=${resources.iron ?? 0}>
            <resource-iron></resource-iron>
        </resource-counter>
        <resource-counter title="${text(texts.resources.log)}" count="${player.resources.wood}" collect=${resources.wood ?? 0}>
            <resource-wood></resource-wood>
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