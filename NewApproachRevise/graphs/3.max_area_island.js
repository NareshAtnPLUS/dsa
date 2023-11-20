/**
 * the number of islands can be computed by computing the area of the island
 * by looping through each node in the graph
 * the number of individual areas computed, refers to the number of island
 *
 * Computing the area of the island
 * this can be done by a dfs on each node, where keeping track of the
 * visited nodes on a global level, that means if we visited the node
 * in a previous iteration, we won't visit again
 *
 * The base case conditions for our dfs are
 *  1. current node is a visited node
 *  2. current node is not a valid node or out of the range of the graph (matrix)
 *  3. current node is a water
 * for these cases, we return 0 (as the area);
 * on the other hand, if the current node fails these conditions, then it's a
 * valid, not visited and a land node, we should add this node to
 * our area computation
 * so, we will do following to add current node in our area computation
 * 1. add the current node to our visited set
 * 2. compute area by this forumla
 *  1 + recursively call the function in all directions to compute area
 * return the area
 *
 * call the compute area dfs on all the nodes in a graph,
 * and find the individual island areas
 * finally return the length of the islandAreas array
 * this is the number of individual islands present in the graph
 */

/**
 *
 * @param {string[][]} grid
 * @returns {number}
 */
const maxAreaOfIsland = function (grid) {
  const gridSize = { ROWS: grid.length, COLS: grid[0].length };
  const visited = new Set();
  const isWater = (cell) => cell === 0;
  const createNode = (r, c) => `${r},${c}`;
  // direction delta numbers
  const directions = {
    top: [-1, 0],
    right: [0, 1],
    bottom: [1, 0],
    left: [0, -1],
  };
  const inRange = (max, num) => num >= 0 && num < max;
  // dfs method
  const computeArea = ({ r, c }) => {
    const currNode = createNode(r, c);
    // base case
    if (
      visited.has(currNode) ||
      !inRange(gridSize.ROWS, r) ||
      !inRange(gridSize.COLS, c) ||
      isWater(grid[r][c])
    ) {
      return 0;
    }
    visited.add(currNode);
    const area =
      1 +
      Object.values(directions)
        .map(([dr, dc]) => computeArea({ r: r + dr, c: c + dc }))
        .reduce((a, b) => a + b, 0);
    return area;
  };
  let maxIslandArea = 0;
  for (let rowIdx = 0; rowIdx < gridSize.ROWS; rowIdx++) {
    for (let colIdx = 0; colIdx < gridSize.COLS; colIdx++) {
      const currIsLandArea = computeArea({ r: rowIdx, c: colIdx });
      maxIslandArea = Math.max(maxIslandArea, currIsLandArea);
    }
  }
  return maxIslandArea;
};
console.log(
  "Max Area Island:",
  maxAreaOfIsland([
    [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
  ])
);

/**
 * Chat GPT Response after this problem
 * Certainly! Here's a summary of what you've learned from this problem:

### Algorithm Design
1. **Depth-First Search (DFS):** You employed DFS to traverse the graph (grid in this case) to find the connected components, which represent individual islands.

2. **Recursion:** You made use of recursion in your DFS function (`computeArea`) to navigate through each cell and its neighbors.

3. **Base Cases:** You effectively implemented base case conditions for your recursive function to handle edge cases like previously visited nodes, out-of-range nodes, and water cells.

### Code Structuring
1. **Helper Functions:** You separated concerns by creating smaller helper functions (`createNode`, `inRange`) to make the code modular and easier to understand.

2. **Object to Store Directions:** You learned how to adapt the code to use an object to store the directions (`top`, `right`, `bottom`, `left`) instead of an array.

### Time Complexity Analysis
1. **Linear Complexity:** You analyzed the time complexity of the algorithm, determining that it's linear in terms of the number of cells in the grid, O(ROWS * COLS).

2. **Set Operations:** You learned that JavaScript Set operations like `add` and `has` are generally O(1), contributing to the efficiency of your solution.

3. **Constant Time Operations:** You learned that some operations like `Object.values()` have constant time complexity when the object size is fixed.

### Naming Conventions and Code Comments
1. **Descriptive Naming:** You examined the importance of proper variable and function naming for better code readability.

2. **Comments:** You included detailed comments in your code, describing the purpose and functionality of different parts.

### Optimization Concerns
1. **No Effect on Time Complexity:** You learned that changing from an array to an object to store directions doesn't significantly impact the algorithm's time complexity.

By solving this problem, you've practiced important concepts like DFS, recursion, time complexity analysis, and code structuring—skills that are essential for tackling a wide range of programming challenges.
 */
