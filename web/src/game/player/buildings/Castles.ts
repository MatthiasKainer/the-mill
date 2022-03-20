import { ResourceGeneratingBuilding } from "../../world";
import { SpriteSet } from "../../world/sprite";

export const SmallCastle: SpriteSet & ResourceGeneratingBuilding = {
    id: "building-castle-small",
    name: "Small Castle",
    occurences: {
        min: 1
    },
    resources: {
        grain: {generatedResource: 10},
        hay: { generatedResource: 10 },
        stone: { generatedResource: 10 },
        iron: { generatedResource: 10 },
    }
}