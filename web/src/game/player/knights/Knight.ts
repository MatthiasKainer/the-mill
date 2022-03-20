import { player } from "../../..";
import { generateUUID } from "../../../math/guid";
import { FigherAsset, isFighterAsset, Resources, SimpleCoords, Team, World } from "../../world";
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

export const findNextPlayerWithAction = (world: World, currentTeam: Team) => {
    for (const row of world.map) {
        for (const col of row) {
            const playerWithActionsLeft = col.elements
                .filter(element => isFighterAsset(element))
                .map(element => element as FigherAsset)
                .find(element => element.team === currentTeam && element.actions.current > 0);
            
            if (playerWithActionsLeft) {
                return playerWithActionsLeft;
            }
        }
    }

    return undefined
}