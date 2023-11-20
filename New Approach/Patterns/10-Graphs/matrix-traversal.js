/**
 *
 * @param {number[][]} grid
 */
const matrixTraversal = (grid) => {
    /**
     *
     * @param {{r:number,c:number}} co_ordinates
     * @param {Set} visited
     * @param {{ROWS:number,COLS:number}} gridSize
     */
    const dfs = (co_ordinates, visited, gridSize) => {
        const { ROWS, COLS } = gridSize;
        const { r, c } = co_ordinates;
        const node = `(${r},${c})`;
        /**
         * Base Cases
         * 1. if r, c goes unbouded,return 0
         * 2. if its a visited node return false
         * 3. if the node is blocked
         */
        if (
            Math.min(r, c) < 0 ||
            r === ROWS ||
            c === COLS ||
            visited.has(node) ||
            grid[r][c] === 1
        ) {
            return 0;
        }
        if (r === ROWS - 1 && c === COLS - 1) {
            return 1;
        }
        visited.add(node);
        let count = 0;
        count += dfs({ r: r + 1, c }, visited, gridSize);
        count += dfs({ r: r - 1, c }, visited, gridSize);
        count += dfs({ r, c: c + 1 }, visited, gridSize);
        count += dfs({ r, c: c - 1 }, visited, gridSize);
        visited.delete(node);
        return count;
    };
    const num_of_ways = dfs({ r: 0, c: 0 }, new Set(), {
        ROWS: grid.length,
        COLS: grid[0].length,
    });
    return num_of_ways;
};
const matrix = [
    [0, 0, 0, 0],
    [1, 1, 0, 0],
    [0, 0, 0, 1],
    [0, 1, 0, 0],
];
console.log(matrixTraversal(matrix));
