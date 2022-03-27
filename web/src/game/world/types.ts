import { Dice } from "../player/dices/dice"
import { SpriteSet } from "./sprite"

export const teams = (): Team[] => ["green", "red"]
export type Team = "green" | "red"

export type Players = {
    [team in Team]: Player
}

export const RESOURCES = ["hay", "grain", "iron", "wood", "stone"]

type ResourcesGenerator = {
    hay?: number
    grain?: number
    iron?: number
    wood?: number
    stone?: number
    generatedResource: number
}

export type Resources = {
    hay: number
    grain: number
    iron: number
    wood: number
    stone: number
}

export type ResourceGenerator = {
    hay?: ResourcesGenerator
    grain?: ResourcesGenerator
    iron?: ResourcesGenerator
    wood?: ResourcesGenerator
    stone?: ResourcesGenerator
}

export type ResourceGeneratingBuilding = {
    resources: ResourceGenerator
} & Asset
export type PotentiallyResourceGeneratingBuilding = {
    resources?: ResourceGenerator
} & Asset
export type ResourceGeneratingSprite = SpriteSet & ResourceGeneratingBuilding & SimpleCoords

export function isResourceGeneratingAsset(asset?: Asset): asset is ResourceGeneratingBuilding {
    return (asset !== undefined
        && (asset as ResourceGeneratingBuilding)?.resources !== undefined)
}


export type Player = {
    resources: Resources
}

export type Asset = {
    /**
     * The unique id of the asset in the world
     */
    id: string
    /**
     * The name of the asset/sprite
     */
    name: string
    team?: Team
}

export type PositionedAsset = Asset & SimpleCoords
export type PositionedTeamAsset = {team: Team} & SimpleCoords

export function isPositionedAsset(asset?: Asset): asset is PositionedAsset {
    return (asset !== undefined && (asset as PositionedAsset)?.row >= 0 && (asset as PositionedAsset)?.col >= 0)
}

export type PlayerAsset = PotentiallyResourceGeneratingBuilding & {
    team: Team
}

export type Health = {
    current: number
    max: number
}
export type Actions = {
    current: number
    max: number
}

export type Movement = {
    points: number
}

export type ActionableAsset = PlayerAsset & {
    actions: Actions
}

export function isActionableAsset(asset?: Asset): asset is ActionableAsset {
    return (asset !== undefined && (asset as ActionableAsset)?.actions !== undefined)
}

export type HealthyAsset = PlayerAsset & {
    health: Health
}

export function isHealthyAsset(asset?: Asset): asset is HealthyAsset {
    return (asset !== undefined && (asset as HealthyAsset)?.health !== undefined)
}

export type MoveableAsset = PlayerAsset & ActionableAsset & HealthyAsset & {
    movement: Movement
}

export function isMoveableAsset(asset: Asset): asset is MoveableAsset {
    return (asset && (asset as MoveableAsset)?.actions?.max > 0)
}

export type FightingAsset = {
    dices: Dice[]
}

export type FigherAsset = MoveableAsset & FightingAsset

export function isFighterAsset(asset: Asset): asset is FigherAsset {
    return (asset && (asset as FigherAsset)?.dices?.length > 0)
}
export function isFightingAsset(asset: Asset): asset is FigherAsset {
    return (asset && (asset as FigherAsset)?.dices?.length > 0)
}

export type SimpleCoords = {
    row: number
    col: number
}