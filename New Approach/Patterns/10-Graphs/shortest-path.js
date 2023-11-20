/**
 * how bfs finds the shortest path
 *
 * @param {number[][]} grid
 */
const shortestPath = (grid) => {
    /**
     *
     * @param {string} str
     * @returns
     */
    const encodeNode = (row, col) => `${row},${col}`;
    const [ROWS, COLS] = [grid.length, grid[0].length],
        visited = new Set(),
        STARTING_CO_ORDINATES = [0, 0],
        startingNode = encodeNode(...STARTING_CO_ORDINATES),
        queue = [STARTING_CO_ORDINATES];
    let shortestPath = 0;
    visited.add(startingNode);
    while (queue.length > 0) {
        const queueLength = queue.length;
        for (let idx = 0; idx < queueLength; idx++) {
            const [r, c] = queue.shift();
            if (r === ROWS - 1 && c === COLS - 1) {
                return shortestPath;
            }
            const neighbours = [
                [0, 1],
                [0, -1],
                [1, 0],
                [-1, 0],
            ];
            for (let [dr, dc] of neighbours) {
                const [row, col] = [r + dr, c + dc];
                const new_node = encodeNode(row, col);
                if (
                    Math.min(row, col) < 0 ||
                    row === ROWS ||
                    col === COLS ||
                    visited.has(new_node) ||
                    grid[row][col] === 1
                ) {
                    continue;
                }
                queue.push([row, col]);
                visited.add(new_node);
            }
        }
        shortestPath += 1;
    }
};
const grid = [
    [0, 0, 0, 0],
    [1, 1, 0, 0],
    [0, 0, 0, 1],
    [0, 1, 0, 0],
];
console.log(shortestPath(grid));
