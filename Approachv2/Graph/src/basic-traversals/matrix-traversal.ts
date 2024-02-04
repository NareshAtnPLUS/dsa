import {MatrixNodeType} from './types';
import {createNode, directions, getSize, rangeIn} from './utils';

/**
 * The matrix traversal can be done in three steps
 * 1. base case
 * 2. branching case
 * 3. accumalation of the result and returning it
 * each base case can be different, but the branching case for the matrix traversal is almost similar
 * there are some utility functions which are common for the matrix graph traversal.
 *
 * @param arr
 */
export const matrixTraversal = (grid: number[][] | string[][]) => {
  const gridSize = getSize(grid);
  const destinationCoordinate = {
    ROW: gridSize.ROWS - 1,
    COL: gridSize.COLS - 1,
  };
  const dfs = (coordinates: MatrixNodeType, visited: Set<string>) => {
    const {r, c} = coordinates;
    const node = createNode({r, c});
    // base cases
    if (
      !rangeIn(gridSize.ROWS, r) ||
      !rangeIn(gridSize.COLS, c) ||
      visited.has(node) ||
      grid[r][c] === 1
    ) {
      return 0;
    }
    if (c === destinationCoordinate.COL && r === destinationCoordinate.ROW) {
      return 1;
    }
    visited.add(node);
    let count = 0;
    for (const [dr, dc] of directions) {
      count += dfs({r: r + dr, c: c + dc}, visited);
    }
    // after visiting the node delete the node from visited set
    // so that the other recursion can use the same path. the idea is the same recursion cannot use
    // the same path again.
    visited.delete(node);
    return count;
  };
  const numWays = dfs({r: 0, c: 0}, new Set<string>());
  return numWays;
};
