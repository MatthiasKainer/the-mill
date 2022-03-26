import { SimpleCoords } from "../../game";
import { MoveModeData, MoveModeEnd } from "../../game/world/events";
import { SimpleCoordsEquals } from "../../math/position";
import { releaseHormone } from 'organismus';

export function getCssClass(hexagon: SimpleCoords, data: MoveModeData | undefined) {
    if (!data) {
        return ""
    }

    if (SimpleCoordsEquals(data.start, hexagon)) return "active start"
    if (data.end && ((data.trail?.length ?? 0) < 1) && SimpleCoordsEquals(data.end, hexagon)) return "active unreachable"
    if (data.end && SimpleCoordsEquals(data.end, hexagon)) return "active end"
    if (data.trail && data.trail.some(coord => SimpleCoordsEquals(coord, hexagon))) return "active trail"
    if (!data.inReach?.some(coord => SimpleCoordsEquals(coord, hexagon))) return "inactive unreachable"
    return "inactive"
}

export function click(hexagon: SimpleCoords, data: MoveModeData | undefined) {
    if (!data) {
        return
    }

    releaseHormone(MoveModeEnd, hexagon)
}