import { css } from 'nested-css-to-flat/lit-css';
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
  &:hover {
    background: var(--colorFocus);
  }
}`

export const cssHexagonMovement = css`
    .inactive {
        opacity: 0.8;
        cursor: not-allowed;
    }
    .active {
      &.start, &,trail, &.end {
        filter: brightness(1.5);
      }
    }
    .unreachable {
        cursor: not-allowed;
        filter: saturate(0) hue-rotate(217deg);
    }
    .inactive.unreachable {
      opacity: 0.1;
    }
`