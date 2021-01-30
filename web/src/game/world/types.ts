import { Dice } from "../player/dices/dice"

export const teams = (): Team[] => ["green", "red"]
export type Team = "green" | "red"

export type Players = {
    [team in Team]: Player
}

export type Resources = {
    hay: number
    grain: number
    iron: number
    log: number
    stone: number
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

export function isPositionedAsset(asset?: Asset): asset is PositionedAsset {
    return (asset !== undefined && (asset as PositionedAsset)?.row >= 0 && (asset as PositionedAsset)?.col >= 0)
}

export type PlayerAsset = Asset & {
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

export type MoveableAsset = PlayerAsset & {
    movement: Movement
    health: Health
    actions: Actions
}

export function isMoveableAsset(asset: Asset): asset is MoveableAsset {
    return (asset && (asset as MoveableAsset)?.actions?.max > 0)
}

export type FigherAsset = MoveableAsset & {
    dices: Dice[]
}

export function isFighterAsset(asset: Asset): asset is FigherAsset {
    return (asset && (asset as FigherAsset)?.dices?.length > 0)
}

export type SimpleCoords = {
    row: number
    col: number
}