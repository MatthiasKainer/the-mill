import { SimpleCoords } from "../../game";
import { BattleModeData, BattleModeEnd } from "../../game/world/events";
import { SimpleCoordsEquals } from "../../math/position";
import { releaseHormone } from 'organismus';

export function getCssClass(hexagon: SimpleCoords, data: BattleModeData | undefined) {
    if (!data) {
        return ""
    }

    if (SimpleCoordsEquals(data.start, hexagon)) return "active start"
    if (data.end && SimpleCoordsEquals(data.end, hexagon)) return "active end"
    if (data.range && data.range.some(coord => SimpleCoordsEquals(coord, hexagon))) return "active trail"
    return "inactive"
}

export function click(hexagon: SimpleCoords, data: BattleModeData | undefined) {
    if (!data) {
        return
    }

    releaseHormone(BattleModeEnd, hexagon)
}