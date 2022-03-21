import { Terrain } from "../../world/terrain"

export function isTerrain(resource: Terrain, type: "forest" | "mountain"): boolean {
    return resource.sprite.name === type;
}