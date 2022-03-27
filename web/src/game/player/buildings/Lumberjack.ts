import { generateUUID } from "../../../math/guid"
import { Asset, ResourceGeneratingBuilding, SimpleCoords } from "../../world"
import { SpriteSet } from "../../world/sprite"

export const CreateSmallLumberjack = ({position, asset}: {position: SimpleCoords, asset: Asset}): SpriteSet & ResourceGeneratingBuilding & SimpleCoords => ({
    id: generateUUID(), 
    name: "lumberjack-small",
    team: asset.team,
    ...position,
    occurences: {
        min: 1
    },
    resources: {
        wood: { generatedResource: 50 },
    }
})