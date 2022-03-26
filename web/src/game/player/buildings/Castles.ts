import { ActionableAsset, FightingAsset, HealthyAsset, ResourceGeneratingBuilding, Team } from "../../world";
import { SpriteSet } from "../../world/sprite";
import * as dices from "../dices"

export const SmallCastle: SpriteSet & ResourceGeneratingBuilding & FightingAsset & HealthyAsset & ActionableAsset = {
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