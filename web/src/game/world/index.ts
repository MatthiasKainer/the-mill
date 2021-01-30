import { setLoglevel, LOGLEVEL } from "organismus"

if (window.location.hash.indexOf("log") >= 0) {
    setLoglevel(LOGLEVEL.INFO)
}
if (window.location.hash.indexOf("trace") >= 0) {
    setLoglevel(LOGLEVEL.TRACE)
}

export * from "./worldLoader"
export * from "./types"
export * from "./world-state"