import { generateUUID } from "../../math/guid"
import { SpriteSet } from "./sprite"
import { Asset } from "./types"

export const Mill: SpriteSet = {
    id: "building-mill",
    occurences: {
        min: 1
    }
}

type DistributedSpriteSet = SpriteSet & {
    min: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9,
    max: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
}

function isDistributedSpriteSet(sprite: SpriteSet): sprite is DistributedSpriteSet {
    return sprite !== undefined && (sprite as DistributedSpriteSet).max > 0
}

type BuildingAsset = Asset

const buildings: SpriteSet[] | DistributedSpriteSet[] = [
    {...Mill, min: 0, max: 2},
    {...Mill, min: 8, max: 10},
]

type Props = {
    rows: number,
    cols: number
}

const lazyRandom = (size: number) => Math.round(Math.random() * (size - 1))

export const getRandomLocation = ({min, max}: DistributedSpriteSet, rows: number, cols: number) => {
    const rel = (number: number) => rows * cols * (number / 10)
    return Math.floor(Math.random() * (rel(max) - rel(min)) + rel(min))
}

export const getBuildingsForMap = (props: Props) => {
    const arrayForBuildings: BuildingAsset[][] = new Array(props.rows * props.cols).map(() => [])
    buildings.forEach(building => {
        let buildings =
            building.occurences.factor
                ? Math.max(building.occurences.min, arrayForBuildings.length / building.occurences.factor)
                : building.occurences.min
        while (buildings > 0) {
            const position = isDistributedSpriteSet(building) 
                ? getRandomLocation(building, props.rows, props.cols)
                : lazyRandom(arrayForBuildings.length)
            arrayForBuildings[position] = [
                ...(arrayForBuildings[position] ?? []),
                { name: building.id, id: generateUUID() }
            ]
            buildings--
        }
    })
    return arrayForBuildings;
}