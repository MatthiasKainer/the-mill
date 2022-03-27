import { player } from "../../..";
import { generateUUID } from "../../../math/guid";
import { MoveableAsset, PositionedTeamAsset, Resources, SimpleCoords } from "../../world";
import { SpriteSet } from "../../world/sprite";

export const Wagon: SpriteSet = {
    id: "player-wagon",
    occurences: {
        min: 0
    }
}

export const costs = (): Resources => ({
    grain: 50,
    iron: 0,
    hay: 0,
    wood: 50,
    stone: 0
})

export type NewWagon = MoveableAsset & SimpleCoords

export const CreateWagon = ({ team, row, col }: PositionedTeamAsset): NewWagon => ({ 
    id: generateUUID(), 
    name: player.wagon.name, 
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
    }
})
