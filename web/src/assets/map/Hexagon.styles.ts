import { css } from 'lit';
import { HEXAGON_WIDTH } from './consts';

export const cssHexagon =  css`
:host {
  display: inline-block;
}
.hexagon {
  position: relative;
  cursor: pointer;
  display: inline-block;
  background-color: var(--colorShow);
  width: ${HEXAGON_WIDTH}px;
  height: 140px;
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  transition: all 500ms linear;
  z-index: 1;
}
.hexagon:hover {
  background: var(--colorFocus);
}`

export const cssHexagonMovement = css`
    .inactive {
        opacity: 0.3;
        cursor: not-allowed;
    }
    .active.start {
        filter: brightness(50%);
    }
    .active.end {
        filter: brightness(50%);
    }
    .active.unreachable {
        cursor: not-allowed;
        filter: brightness(50%) hue-rotate(332deg);
    }
`