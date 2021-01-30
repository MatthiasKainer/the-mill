import Heapify from "./heapify";
import { Cube } from "../cube/cube";
import { Position } from "../position";
import { PathResult } from "./type";

const id = (c: Cube) =>  c.toPosition().toString();

export const shortestPath = (start: Cube, goal: Cube, map: Cube[], isBlocked: (p: Cube) => boolean, range: number): PathResult => {
  const frontier = new Heapify();
  frontier.push(start, 0);
  const cameFrom: { [key: string]: string | undefined } = {};
  const costSoFar: { [key: string]: number } = {};
  const visited: string[] = [];
  let foundPath = false;
  cameFrom[id(start)] = id(start);
  costSoFar[id(start)] = 0;

  if(start.equals(goal)) return {
    path: []
  }

  if (isBlocked(goal)) return {
    path : []
  } 

  while (frontier.length > 0) {
    const current = frontier.pop() as Cube;
    if (current.equals(goal)){ foundPath = true; break; }
    if (frontier.length > 1000) {
      throw new Error("No what kinda path are you searching for?!")
    }

    visited.push(current.toPosition().toString())

    for (const next of current.neighbors(map).filter(neighbour => !cameFrom[id(neighbour)]).map(neighbour => 
        map.find(i => i.equals(neighbour)) ?? neighbour)) {
      if (isBlocked(next)) continue;
      if (!visited.some(i => i === id(next))) visited.push(id(next))

      const newCost = costSoFar[id(current)] + next.cost();
      if (range < newCost) continue;
      if (!costSoFar[id(next)] || newCost < costSoFar[id(next)]) {
        costSoFar[id(next)] = newCost;
        frontier.push(next, newCost + goal.heuristic(next));
        cameFrom[id(next)] = current.toPosition().toString();
      }
    }
  }

  const startPosition = start.toPosition();
  if (!foundPath) return { path: [], visited}
  let current: Position | null = goal.toPosition();
  const path: Position[] = [];
  do {
    path.push(current)
    current = Position.fromString(cameFrom[current.toString()])
  } while (current !== null && !current.equals(startPosition))

  return {path : path.reverse(), visited};
};

export const CubeAStarPathTo = shortestPath

export const CubeAStarDistance = (start: Cube, goal: Cube, map: Cube[], isBlocked: (p: Cube) => boolean, range: number) => {
  return shortestPath(start, goal, map, isBlocked, range).path.length
}
