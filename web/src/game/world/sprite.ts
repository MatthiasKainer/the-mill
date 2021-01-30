export type Sprite = {
    file: string,
    x: number,
    y: number
}

export type SpriteSet = {
    id: string,
    occurences: {
        factor?: number,
        min: number
    }
}