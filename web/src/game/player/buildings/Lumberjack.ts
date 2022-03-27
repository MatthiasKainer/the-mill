import { generateUUID } from "../../../math/guid"
import { PositionedTeamAsset, ResourceGeneratingSprite } from "../../world"

export const CreateSmallLumberjack = ({row, col, team}: PositionedTeamAsset): ResourceGeneratingSprite => ({
    id: generateUUID(), 
    name: "lumberjack-small",
    team,
    row,
    col,
    occurences: {
        min: 1
    },
    resources: {
        wood: { generatedResource: 50 },
    }
})