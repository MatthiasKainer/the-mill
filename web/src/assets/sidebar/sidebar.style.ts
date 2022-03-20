import { css } from "lit";

export const sidebarBaseCSS = css`
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
    margin: 15px 15px 25px 15px;
  }
  button {
        cursor: pointer;
    }
    img {
        width: 100%;
    }
    h3 {
        color: var(--colorMain)
    }
  `;