import { isMoveableAsset, MoveableAsset, Team, World } from "..";

export const TurnComplete = (...assets: MoveableAsset[]) => {
    assets.forEach(asset => {
        asset.actions.current = asset.actions.max
    })
}


export const findNextPlayerWithAction = (world: World, currentTeam: Team) => {
    for (const row of world.map) {
        for (const col of row) {
            const playerWithActionsLeft = col.elements
                .filter(isMoveableAsset)
                .map(element => element as MoveableAsset)
                .find(element => element.team === currentTeam && element.actions.current > 0);
            
            if (playerWithActionsLeft) {
                return playerWithActionsLeft;
            }
        }
    }

    return undefined
}