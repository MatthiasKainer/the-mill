import { Resources } from "../world";
import { costs as knightCosts } from "./knights/Knight";
import { costs as wagonCosts } from "./wagon/Wagon";

const resources: Resources = {
    hay: 0,
    iron: 0,
    grain: 0,
    wood: 0,
    stone: 0
}

export default {
    wagon: wagonCosts,
    knight: knightCosts,
    iron: () => ({...resources, stone: 4, wood: 2, grain: 1 }),
    castle_medium: () => ({...resources, wood: 500, grain: 500, stone: 500 }),
    castle_large: () => ({...resources, stone: 1000, iron: 1000, grain: 1000 }),
}

function tryRemove(a: number, b: number) {
    if (a - b < 0) throw new Error("Not enough resources");
    return a - b;
}

export function detactCosts(resources: Resources, costs: Resources): Resources {
    return {
        hay: tryRemove(resources.hay, costs.hay),
        iron: tryRemove(resources.iron, costs.iron),
        grain: tryRemove(resources.grain, costs.grain),
        wood: tryRemove(resources.wood, costs.wood),
        stone: tryRemove(resources.stone, costs.stone)
    }
}