const getPlayerAsset = (asset: string) => `player-${asset}`

export const assets = {
    knight: getPlayerAsset("knight"),
    wagon: getPlayerAsset("wagon"),
    mine: {
        small: "mine-small"
    },
    lumberjack: {
        small: "lumberjack-small"
    }
};