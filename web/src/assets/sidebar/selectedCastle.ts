import { html } from "lit";
import { css } from "nested-css-to-flat/lit-css"

import { releaseHormone, useReceptor } from "organismus";
import { LitElementWithProps, pureLit, useState } from "pure-lit";
import { buildings } from "..";
import { ActionableAsset, HealthyAsset, Player, Resources, Team } from "../../game";
import costs from "../../game/player/costs";
import {
  KnightCreated,
  PlayerUpdate,
  WagonCreated,
} from "../../game/world/events";
import { text, texts } from "../../internationalization";
import { sidebarBaseCSS } from "./sidebar.style";

import "./controls/health-bar"
import { asNumber } from "../../math/number";

type Props = {
  selected: {
    payload: HealthyAsset & ActionableAsset;
    col: number;
    row: number;
  };
};

const style = css`
  header {
    display: grid;
    grid-template-areas: 
        "castle castle health health health"
        "castle castle stats stats stats"
        "castle castle attack none none";
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    
    & #castle {
      grid-area: castle;
      position: relative;
      width: 4em;
      height: 4em;
    }
    & #health {
      grid-area: health;
    }
    & #stats {
      grid-area: stats;
    }
  }
  h3 {
    text-align: center;
    margin-top: 0;
  }
  resource-counter {
    display: grid;
    grid-template-columns: 1fr;
    font-size: 0.7rem;
    
    &.enough {
      color: var(--colorMain);
    }
    &.lack {
      color: var(--colorHighlight);
    }
  }
`;

console.log(style)

const costList = (resources: Resources, costs: Resources) => {
  return html`
    ${costs.hay > 0
      ? html`<resource-counter
          count="${costs.hay}"
          class="${resources.hay >= costs.hay ? "enough" : "lack"}"
        >
          <resource-hay></resource-hay>
        </resource-counter>`
      : html``}
    ${costs.grain > 0
      ? html`<resource-counter
          count="${costs.grain}"
          class="${resources.grain >= costs.grain ? "enough" : "lack"}"
        >
          <resource-grain></resource-grain>
        </resource-counter>`
      : html``}
    ${costs.wood > 0
      ? html`<resource-counter
          count="${costs.wood}"
          class="${resources.wood >= costs.wood ? "enough" : "lack"}"
        >
          <resource-wood></resource-wood>
        </resource-counter>`
      : html``}
    ${costs.stone > 0
      ? html`<resource-counter
          count="${costs.stone}"
          class="${resources.stone >= costs.stone ? "enough" : "lack"}"
        >
          <resource-stone></resource-stone>
        </resource-counter>`
      : html``}
    ${costs.iron > 0
      ? html`<resource-counter
          count="${costs.iron}"
          class="${resources.iron >= costs.iron ? "enough" : "lack"}"
        >
          <resource-iron></resource-iron>
        </resource-counter>`
      : html``}
  `;
};

export default pureLit(
  "sidebar-castle",
  (el: LitElementWithProps<Props>) => {
    const {
      selected: {
        payload,
        row,
        col,
      },
    } = el;
    const { team, health, actions } = payload
    const start = {
      row: asNumber(row),
      col: asNumber(col)
    }
    const { get: getCurrentPlayer, set: setCurrentPlayer } = useState<
      Player | undefined
    >(el, undefined);
    useReceptor(el, PlayerUpdate, setCurrentPlayer);
    const { resources } = getCurrentPlayer() ?? ({ resources: {} } as Player);
    return html`
      <header>
        <building-castle-small id="castle" team="${team}"></building-castle-small>
        <health-bar id="health" .health="${health}"></health-bar>
        <stats-bar id="stats" .health="${health}" .actions="${actions}"></stats-bar>
        <button-attack id="attack" .actions="${actions}" .asset="${payload}" .position="${start}"></button-attack>
      </header>
      <h3>${text(texts.assets.castle.build)}</h3>
      <div class="container">
        <button-image
          height="35px"
          src="/assets/knight_${team}.png"
          title="${text(texts.assets.properties.actions.build.knight)}"
          @click=${async () =>
        await releaseHormone(KnightCreated, { team, row, col })}
        >
          ${costList(resources, costs.knight())}
        </button-image>
        <button-image
          height="35px"
          src="/assets/wagon_${team}.png"
          title="${text(texts.assets.properties.actions.build.wagon)}"
          @click=${async () =>
        await releaseHormone(WagonCreated, { team, row, col })}
        >
          ${costList(resources, costs.wagon())}
        </button-image>
        <button-image height="35px" 
          title="${text(texts.assets.properties.actions.build.iron)}"
          src="/assets/resources/iron.png">
          ${costList(resources, costs.iron())}
        </button-image>
        <button-image height="35px" 
          title="${text(texts.assets.properties.actions.build.castle_medium)}"
          src="/assets/castle_medium_${team}.png">
          ${costList(resources, costs.castle_medium())}
        </button-image>
        <button-image height="35px" 
          title="${text(texts.assets.properties.actions.build.castle_large)}"
          src="/assets/castle_large_${team}.png">
          ${costList(resources, costs.castle_large())}
        </button-image>
      </div>`;
  },
  {
    styles: [sidebarBaseCSS, style],
    defaults: {
      selected: {
        payload: {
          id: "",
          name: buildings.castleSmall.name,
          team: "" as Team,
          health: { current: 0, max: 0 },
          actions: { current: 0, max: 0 },
        },

        col: 0,
        row: 0,
      },
    },
  }
);
