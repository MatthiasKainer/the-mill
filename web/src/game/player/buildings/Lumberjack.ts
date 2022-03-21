import { Asset, ResourceGeneratingBuilding, SimpleCoords } from "../../world"
import { SpriteSet } from "../../world/sprite"

export const CreateSmallLumberjack = ({position, asset}: {position: SimpleCoords, asset: Asset}): SpriteSet & ResourceGeneratingBuilding & SimpleCoords => ({
    id: "lumberjack-small",
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