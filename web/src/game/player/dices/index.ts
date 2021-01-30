import { Dice } from "./dice";

export * from "./Dices"

function r(d: Dice) {
    return d.sides[Math.floor(Math.random() * d.sides.length)].value
}

export function roll(dices: Dice[]) {
    return dices.reduce((sum, dice) => sum + r(dice), 0)
}