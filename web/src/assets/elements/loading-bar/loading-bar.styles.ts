import { css } from "nested-css-to-flat/lit-css";

export const style = css`    
.progress-bar {
    border-radius: 60px;
    overflow: hidden;
    width: 100%;
    & .bar {
        background: rgba(0,0,0,0.075);
        & span {
            padding: 5px;
        }
        & .progress {
            background: #75b800;
            color: #fff;
            width: 0;
            transition: width 1s ease-in-out;
        }
    }
}

span {
    display: block;
}
`