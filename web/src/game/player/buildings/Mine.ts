import { generateUUID } from "../../../math/guid"
import { PositionedTeamAsset, ResourceGeneratingSprite } from "../../world"

export const CreateSmallMine = ({row, col, team}: PositionedTeamAsset): ResourceGeneratingSprite => ({
    id: generateUUID(), 
    name: "mine-small",
    team,
    row,
    col,
    occurences: {
        min: 1
    },
    resources: {
        stone: { generatedResource: 50 },
        iron: { generatedResource: 50 },
    }
})