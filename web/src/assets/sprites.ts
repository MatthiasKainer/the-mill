import { css, html } from "lit"
import {unsafeHTML} from 'lit/directives/unsafe-html.js';
import { releaseHormone, useReceptor } from "organismus";
import { LitElementWithProps, pureLit, useOnce, useState } from "pure-lit";

import { buildings, player } from "."
import { Asset, isPositionedAsset, Team } from "../game";
import { HexagonUpdated, HexagonUpdatedPayload, ItemSelected, RequestSelectCoords, TurnAccepted } from "../game/world/events";
import { deepQuerySelector } from "../browser/Selector";

type Props = {
    row: number,
    col: number,
    triggers: { [team: string]: (() => Promise<unknown>)[] }
}

async function doTrigger(triggers: (() => Promise<unknown>)[]) {
    for (const trigger of triggers) {
        await trigger()
    }
} 

const getFilteredTriggers = (team: Team, triggers: { [team: string]: (() => Promise<unknown>)[] }) => {
    return [
        ...(triggers.none ?? []),
        ...(triggers[team] ?? [])
    ]
}

pureLit("sprite-set", (el: LitElementWithProps<Props>) => {
    const { getState: getUpdated, publish: setUpdated } 
        = useState<HexagonUpdatedPayload | undefined>(el, undefined)
    const { getState: getCurrentTeam, publish: setCurrentTeam }
        = useState<Team | undefined>(el, undefined)

    useReceptor(el, 
        HexagonUpdated, 
        (u) => el.row.toString() === u?.row.toString() && el.col.toString() === u?.col.toString(), 
        setUpdated
    )
    useReceptor(el,
        TurnAccepted,
        setCurrentTeam
    )

    if (getUpdated()) {
        doTrigger(getFilteredTriggers(getCurrentTeam()!, el.triggers))
            .then(() => releaseHormone(ItemSelected, { item: "hexagon", row: el.row, col: el.col }))
    }
    useOnce(el, () => {
        el.addEventListener("click", async () => {
            doTrigger(getFilteredTriggers(getCurrentTeam()!, el.triggers))
        })
    })

    return html`<slot></slot>`
}, {
    defaults: {
        row: 0,
        col: 0,
        triggers: {}
    }
})

pureLit("sprite-player-elements-grid", () => {
    return html`<slot></slot>`
},
{
    styles: css`
    slot {
        display: grid;
        align-items: center;
        grid-template-columns: repeat(6, 1fr);
    }
    `
})

export const spriteFactory = (elements: Asset[] | undefined, row: number, col: number) => {
    const triggers: { [team: string]: (() => Promise<unknown>)[] } = {}
    const assets = elements?.map((element) => {
        const entry = Object.entries({ ...buildings, ...player }).find(([_, value]) => value.name === element.name)
        const payload = Object.entries({ ...element, name: undefined })
            .filter(([_, values]) => values !== undefined)
        const attributes = payload
            .map(([key, value]) => `${key}="${value}"`)
            .join(" ")
        const team = element.team ?? "none";
        triggers[team] = triggers[team] ?? []
        triggers[team].push(() => releaseHormone(ItemSelected, { item: entry?.[1].name ?? "", row, col, payload: {...element} }))
        return html`${unsafeHTML(`<${entry?.[1].name ?? "span" } ${attributes}></${entry?.[1].name ?? "span" }>`)}`
    })
    return html`<sprite-set .triggers=${triggers} col="${col}" row="${row}">${assets}</sprite-set>`
}

export const spriteGridFactory = (elements: Asset[] | undefined, elementStyle: string = "") => {
    const assets = elements?.map((element) => {
        const entry = Object.entries({ ...buildings, ...player }).find(([_, value]) => value.name === element.name)
        const payload = Object.entries({ ...element, name: undefined })
            .filter(([_, values]) => values !== undefined)
        const attributes = payload
            .map(([key, value]) => `${key}="${value}"`)
            .join(" ")
        const position = isPositionedAsset(element) ? { row: element.row, col: element.col } : { row: 0, col: 0}
        const onClick = () => {
            releaseHormone(RequestSelectCoords, {
                item: element.name,
                ...position,
                payload: element,
            })
            setTimeout(() => {
                deepQuerySelector(element)?.scrollIntoView({behavior: "smooth", block: "center", inline: "center"});
            }, 2)
        }
        const onHover = () => {
            setTimeout(() => {
                deepQuerySelector(element)?.scrollIntoView({behavior: "smooth", block: "center", inline: "center"});
            }, 2)
        }
        return html`<div
            @click="${onClick}"
            @mouseover="${onHover}"
            style="position:relative; cursor: pointer; width: 120px;${elementStyle};">
                ${unsafeHTML(`<${entry?.[1].name ?? "span" } ${attributes} style="${elementStyle};"></${entry?.[1].name ?? "span" }>`)}
        </div>`
    })
    return html`<sprite-player-elements-grid>${assets}</sprite-player-elements-grid>`
}