import {
  createNodeWithoutEnclosing,
  directions,
  getSize,
  rangeIn,
} from './utils';

export const bfsTraversal = (grid: number[][]) => {
  const gridSize = getSize(grid);
  const visited = new Set<string>();
  const [startingCoordinates, destinationCoordinates] = [
    [0, 0],
    [gridSize.COLS - 1, gridSize.ROWS - 1],
  ];
  const [startingNode, destinationNode] = [
    createNodeWithoutEnclosing(startingCoordinates),
    createNodeWithoutEnclosing(destinationCoordinates),
  ];
  let shortestPath = 0;
  const queue = [];
  queue.push(startingCoordinates);
  visited.add(startingNode);
  while (queue.length > 0) {
    const queueLength = queue.length;
    for (let idx = 0; idx < queueLength; idx++) {
      const currCoordinate = queue.shift();
      if (!currCoordinate) {
        throw new Error('Co-ordinates not found for processing');
      }
      const currNode = createNodeWithoutEnclosing(currCoordinate);
      if (currNode === destinationNode) {
        return shortestPath;
      }
      const [r, c] = currCoordinate;
      for (const [dr, dc] of directions) {
        const visitingCoordinates: number[] = [r + dr, c + dc];
        const [row, col] = visitingCoordinates;
        const visitingNode = createNodeWithoutEnclosing(visitingCoordinates);
        if (
          !rangeIn(gridSize.ROWS, r) ||
          !rangeIn(gridSize.COLS, c) ||
          visited.has(visitingNode) ||
          grid[r][c] === 1
        ) {
          continue;
        }
        queue.push(visitingCoordinates);
        visited.add(visitingNode);
      }
    }
    shortestPath += 1;
  }
  return null;
};
