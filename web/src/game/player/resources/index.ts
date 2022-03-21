import { Terrain } from "../../world/terrain"

export function isTerrain(resource: Terrain, type: "forest"): boolean {
    return resource.sprite.name === type;
}