/**
 * there are multiple ways a graph can be traversed. the common graph traversal methods
 * 1. matrix traversal
 * 2. adjacency list
 */

/**
 * matrix traversal can be done by the following approach,
 * traverse through every  node and further traverse across 4 directions of the node
 * till you reach the destination
 * if you reach the destination; you have reached the base class of this condition
 * this idea of traversing through the base case and building up the solution is called
 * depth first search
 * @param {number[][]} grid
 */
const matrixTraversal = (grid) => {
  const visitedSet = new Set();
  const gridSize = { ROWS: grid.length, COLS: grid[0].length };
  const startingPos = { r: 0, c: 0 };
  const rangeIn = (max, num) => num >= 0 && num < max;
  const destinationCoordinate = {
    ROW: gridSize.ROWS - 1,
    COL: gridSize.COLS - 1,
  };
  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  /**
   * How to think and write a dfs function,
   * 1st think the base cases of the problem, here in this case, the base case is
   * reaching the destination cordinate
   * 2nd think about the bounding or traversing constraints for the given problem, in this case
   * the bounding conditions are up, left, right and bottom,
   * accumalte the result
   * then finally return the accumalated result
   * in this case its the count
   * @param {Object} coordinates
   * @param {Set} visited
   */
  const dfs = (coordinates, visited) => {
    const { r, c } = coordinates;

    const node = `(${r},${c})`;
    // first im checking if the currentCoordinates are valid ones
    if (
      !rangeIn(gridSize.ROWS, r) ||
      !rangeIn(gridSize.COLS, c) || // if both r and c are above the gridsize
      visited.has(node) || // the current node is already visited, then its not a new node not worth exploring
      grid[r][c] === 1 // check if the current node is blocked
    ) {
      // if any of the above conditions passes then its not a valid path, return 0 and traverse in another
      // direction
      return 0;
    }
    if (r === destinationCoordinate.ROW && c === destinationCoordinate.COL) {
      // if its the destination coordinate, then return 1 which will get accumalted in dfs traversing
      return 1;
    }
    visited.add(node);
    let count = 0;
    for (let [dr, dc] of directions) {
      count += dfs({ r: r + dr, c: c + dc }, visited);
    }
    // we are deleting this current node, because we are done visiting in the current iteration,
    visited.delete(node);
    // finally we are returning the count which is the result we are accumalting
    return count;
  };
  const numWays = dfs(startingPos, visitedSet);
  return numWays;
};
const matrix = [
  [0, 0, 0, 0],
  [1, 1, 0, 0],
  [0, 0, 0, 1],
  [0, 1, 0, 0],
];
console.log(matrixTraversal(matrix));
