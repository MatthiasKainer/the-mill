import { MoveableAsset } from "..";

export const TurnComplete = (...assets: MoveableAsset[]) => {
    assets.forEach(asset => {
        asset.actions.current = asset.actions.max
    })
}