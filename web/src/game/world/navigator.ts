import { World, Team } from ".";
import { Asset } from "./types";

export function findCoords(world: World, search: { name: string, team?: Team }) {
    for (const row of world.map) {
        const element = row.find(col => 
            col.elements.some(element => 
                element.name === search.name &&
                (search.team === undefined || search.team === element.team)
            )
        )
        if (element) return element.position
    }
    return null;
}

export function findElement(world: World, search: { name: string, team?: Team }) {
    if (!world || !world.map) return null;
    const findElement = (element: Asset) => 
        element.name === search.name &&
        (search.team === undefined || search.team === element.team)
    
    for (const row of world.map) {
        const element = row.find(col => 
            col.elements.some(findElement)
        )
        if (element) return { ...element.position, element: element.elements.find(findElement)! }
    }
    return null;
}
export function findAllElementsFromTeam(world: World, team: Team) {
    if (!world || !world.map) return [];
    const findElement = (element: Asset) => 
        team === element.team
    
    const results: Asset[] = []

    for (const row of world.map) {
        for (const col of row) {
            results.push(...col.elements.filter(findElement))
        }
    }
    return results;
}