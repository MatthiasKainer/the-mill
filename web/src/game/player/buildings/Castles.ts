import { ActionableAsset, FightingAsset, HealthyAsset, PositionedAsset, ResourceGeneratingBuilding, SimpleCoords, Team } from "../../world";
import { SpriteSet } from "../../world/sprite";
import * as dices from "../dices"

type Castle = SpriteSet & ResourceGeneratingBuilding & FightingAsset & HealthyAsset & ActionableAsset
type PositionedCastle = Castle & PositionedAsset

export const SmallCastle: Castle = {
    id: "building-castle-small",
    name: "Small Castle",
    team: "" as Team,
    occurences: {
        min: 1
    },
    dices: [dices.SmallCastleDefence()],
    health: {
        current: 60,
        max: 60,
    },
    actions: {
        current: 2,
        max: 2
    },
    resources: {
        grain: {generatedResource: 10},
        hay: { generatedResource: 10 },
        stone: { generatedResource: 10 },
        iron: { generatedResource: 10 },
    }
}

export const CreateSmallCastle = ({ team, row, col }: {team: Team} & SimpleCoords): PositionedCastle => ({
    ...SmallCastle,
    health: {...SmallCastle.health},
    team,
    row, 
    col,
    actions: {...SmallCastle.actions},
    resources: {
        grain: {...SmallCastle.resources.grain!},
        hay: { ...SmallCastle.resources.hay! },
        stone: { ...SmallCastle.resources.stone! },
        iron: { ...SmallCastle.resources.iron! },
    },
})