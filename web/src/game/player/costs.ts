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