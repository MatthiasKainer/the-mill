import { css, CSSResult } from "lit";

export const sprite = css`
    :host {
        position: absolute;
        width: 120px;
        height: 140px;
        background-repeat: no-repeat;
        background-position: center center;
    }
    div {
        width: 80%;
        height: 80%;
        margin: 10%;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center center;
    }
`

export const inactive = css`
.inactive {
    opacity: 0.8;
    filter: grayscale(100%);
}`

export const sidebar = css`
    ::-webkit-scrollbar {
      width: 10px;
      height: 10px;
      cursor: pointer;
    }
    ::-webkit-scrollbar-track {
      background: #f1f1f1;
    }
    ::-webkit-scrollbar-thumb {
      background: #888;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: #555;
    }
`
export const sidebarFor = (element: CSSResult) => css`
     ${element} {
        scrollbar-color:  #888 #f1f1f1;
        scrollbar-width: thin;
     }
`