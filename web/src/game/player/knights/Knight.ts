import { player } from "../../..";
import { generateUUID } from "../../../math/guid";
import { FigherAsset, Resources, SimpleCoords, Team } from "../../world";
import { SpriteSet } from "../../world/sprite";
import * as dices from "../dices"

export const Knight: SpriteSet = {
    id: "player-knight",
    occurences: {
        min: 0
    }
}

export const CreateKnight = ({ team, row, col }: {team: Team} & SimpleCoords): FigherAsset & SimpleCoords => ({ 
    id: generateUUID(), 
    name: player.knight.name, 
    team, 
    row, 
    col,
    movement: {
        points: 10
    },
    actions: {
        current: 2,
        max: 2
    },
    health: {
        current: 10,
        max: 10
    },
    dices: [ dices.Standard(), dices.MightyBlowOfBetrayal() ]
})

export const costs = (): Resources => ({
    grain: 100,
    iron: 200,
    hay: 0,
    wood: 0,
    stone: 0
})
