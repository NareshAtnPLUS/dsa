/**
 *
 * @param {number[][]} heights
 */
const pacificAtlantic = (heights) => {
    const [ROWS, COLS] = [heights.length, heights[0].length],
        [pacific, atlantic] = [new Set(), new Set()],
        directions = [
            [-1, 0],
            [1, 0],
            [0, -1],
            [0, 1],
        ],
        result = [];

    /**
     *
     * @param {number} row
     * @param {number} col
     * @returns
     */
    const encodeNode = (row, col) => `${row},${col}`;
    /**
     *
     * @param {string} node
     * @returns
     */
    const decodeNode = (node) => node.split(',').map((it) => parseInt(it));
    /**
     *
     * @param {number} row
     * @param {number} col
     * @param {Set} visited
     * @param {number} prevHeight
     */
    const dfs = (row, col, visited, prevHeight) => {
        const node = encodeNode(row, col);

        if (
            visited.has(node) ||
            Math.min(row, col) < 0 ||
            row === ROWS ||
            col === COLS ||
            heights[row][col] < prevHeight
        ) {
            return;
        }
        const curr_height = heights[row][col];
        /* we are going to add the node to the visited set
        only when the above base case satisfies
        i.e the co-ordinates within the bounds, and not in visited already
        most importantly curr_height is lesser than the prevHeight
        since we are going in the reverse direction it should be lesser instead of
        greater than or equal to.
        */
        visited.add(node);
        for (let [dr, dc] of directions) {
            const [curr_row, curr_col] = [row + dr, col + dc];
            dfs(curr_row, curr_col, visited, curr_height);
        }
    };
    // go through every single column in the first row -> for pacific
    // go through every single column in the last row  -> for atlantic
    for (let col = 0; col < COLS; col++) {
        dfs(0, col, pacific, heights[0][col]);
        dfs(ROWS - 1, col, atlantic, heights[ROWS - 1][col]);
    }
    // go through every single row in the first col -> for pacific
    // go through every single row in the last col  -> for atlantic
    for (let row = 0; row < ROWS; row++) {
        dfs(row, 0, pacific, heights[row][0]);
        dfs(row, COLS - 1, atlantic, heights[row][COLS - 1]);
    }
    for (let row = 0; row < ROWS; row++) {
        for (let col = 0; col < COLS; col++) {
            const node = encodeNode(row, col);
            if (pacific.has(node) && atlantic.has(node)) {
                const decodedNode = decodeNode(node);
                result.push(decodedNode);
            }
        }
    }
    return result;
};

console.log(
    pacificAtlantic([
        [1, 2, 2, 3, 5],
        [3, 2, 3, 4, 4],
        [2, 4, 5, 3, 1],
        [6, 7, 1, 4, 5],
        [5, 1, 1, 2, 4],
    ])
);
