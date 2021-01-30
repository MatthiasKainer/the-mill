import { css, html } from "lit-element";
import { useState } from "lit-element-state-decoupler";
import { releaseHormone, useReceptor } from "organismus";
import { LitElementWithProps, pureLit } from "pure-lit";
import { Player, Resources } from "../../game";
import costs from "../../game/player/costs";
import {
  KnightCreated,
  PlayerUpdate,
  WagonCreated,
} from "../../game/world/events";

type Props = {
  selected: {
    payload: { team: string };
    col: number;
    row: number;
  };
};

const style = css`
  :host {
    display: block;
    background-image: url("/assets/sidebar/bg.png");
    background-repeat: no-repeat;
    padding: 15px;
    background-size: 100% 100%;
  }
  .container {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    column-gap: 10px;
    row-gap: 15px;
    margin: 15px;
  }
  building-castle-small {
    position: relative;
    display: block;
    width: 4em;
    height: 4em;
  }
  h3 {
    color: var(--colorMain);
    text-align: center;
    margin-top: 0;
  }
  resource-counter {
    display: grid;
    grid-template-columns: 1fr;
    font-size: 1rem;
  }
  .enough {
    color: var(--colorMain);
  }
  .lack {
    color: var(--colorHighlight);
  }
`;

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
    ${costs.log > 0
      ? html`<resource-counter
          count="${costs.log}"
          class="${resources.log >= costs.log ? "enough" : "lack"}"
        >
          <resource-log></resource-log>
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
        payload: { team },
        row,
        col,
      },
    } = el;
    const { getState: getCurrentPlayer, publish: setCurrentPlayer } = useState<
      Player | undefined
    >(el, undefined);
    useReceptor(el, PlayerUpdate, setCurrentPlayer);
    const { resources } = getCurrentPlayer() ?? ({ resources: {} } as Player);
    return html`<building-castle-small team="${team}"></building-castle-small>
      <h3>Bauen</h3>
      <div class="container">
        <button-image
          height="35px"
          src="/assets/knight_${team}.png"
          @click=${async () =>
            await releaseHormone(KnightCreated, { team, row, col })}
        >
          ${costList(resources, costs.knight())}
        </button-image>
        <button-image
          height="35px"
          src="/assets/wagon_${team}.png"
          @click=${async () =>
            await releaseHormone(WagonCreated, { team, row, col })}
        >
          ${costList(resources, costs.wagon())}
        </button-image>
        <button-image height="35px" src="/assets/resources/iron.png">
          ${costList(resources, costs.iron())}
        </button-image>
        <button-image height="35px" src="/assets/castle_medium_${team}.png">
          ${costList(resources, costs.castle_medium())}
        </button-image>
        <button-image height="35px" src="/assets/castle_large_${team}.png">
          ${costList(resources, costs.castle_large())}
        </button-image>
      </div>`;
  },
  {
    styles: [style],
    defaults: {
      selected: {
        payload: {
          team: "",
        },

        col: 0,
        row: 0,
      },
    },
  }
);
