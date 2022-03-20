import { PlayerAsset } from "..";
import { generateUUID } from "../../math/guid";
import { Team } from "../world";
import { SmallCastle } from "./buildings/Castles"

type Props = {
    rows: number,
    cols: number
}
const region: {[key:string]: (array: PlayerAsset[][]) => number} = {
    "green": (array) => 
        Math.max(array.length * 0.75,  Math.round(Math.random() * (array.length - 1))),
    "red": (array) => 
    Math.min(array.length * 0.25, Math.round(Math.random() * (array.length - 1)))
}

export const getPlayerStartAssets = (team: Team, props: Props) => {
    const arrayForBuildings: PlayerAsset[][] = new Array(props.rows * props.cols).map(() => []);
    ([SmallCastle]).forEach(building => {
        let buildings =
            building.occurences.factor
                ? Math.max(building.occurences.min, arrayForBuildings.length / building.occurences.factor)
                : building.occurences.min
        while (buildings > 0) {
            const nextIndex = region[team](arrayForBuildings)
            arrayForBuildings[nextIndex] = [
                ...(arrayForBuildings[nextIndex] ?? []),
                { name: building.id, team, id: generateUUID(), resources: building.resources }
            ]
            buildings--
        }
    })
    return arrayForBuildings;
}

export const getPlayerStartResources = () => {
    return [SmallCastle]
}