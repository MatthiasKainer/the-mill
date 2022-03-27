import { generateUUID } from "../../../math/guid"
import { Asset, ResourceGeneratingBuilding, SimpleCoords } from "../../world"
import { SpriteSet } from "../../world/sprite"

export const CreateSmallMine = ({position, asset}: {position: SimpleCoords, asset: Asset}): SpriteSet & ResourceGeneratingBuilding & SimpleCoords => ({
    id: generateUUID(), 
    name: "mine-small",
    team: asset.team,
    ...position,
    occurences: {
        min: 1
    },
    resources: {
        stone: { generatedResource: 50 },
        iron: { generatedResource: 50 },
    }
})