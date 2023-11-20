/**
 *
 * @param {number[][]} grid
 */
const numIslands = (grid) => {
    if (grid.length === 0) {
        return 0;
    }
    const [ROWS, COLS] = [grid.length, grid[0].length];
    const visited = new Set();
    const range = (end) => [...Array(end).keys()];
    const encodeNode = (row, col) => `${row},${col}`;
    let islands = 0;
    const bfs = (r, c) => {
        const node = encodeNode(r, c),
            queue = [node];
        visited.add(node);
        while (queue.length > 0) {
            const [curr_row, curr_col] = queue
                .shift()
                .split(',')
                .map((it) => parseInt(it));
            const directions = [
                [1, 0],
                [-1, 0],
                [0, 1],
                [-1, 0],
            ];
            for (let [dr, dc] of directions) {
                const [r, c] = [curr_row + dr, curr_col + dc];
                const new_node = encodeNode(r, c);
                /**
                 * traverse graph if the following conditions proceeds
                 * updated row and col (r,c) should be within the bounds
                 * updated grid position should be a land
                 * new_node should not be visited before
                 */
                if (
                    r in range(ROWS) &&
                    c in range(COLS) &&
                    grid[r][c] === '1' &&
                    !visited.has(new_node)
                ) {
                    queue.push(new_node);
                    visited.add(new_node);
                }
            }
        }
    };

    for (let idx = 0; idx < ROWS; idx++) {
        for (let jdx = 0; jdx < COLS; jdx++) {
            const node = encodeNode(idx, jdx);
            if (grid[idx][jdx] === '1' && !visited.has(node)) {
                bfs(idx, jdx);
                islands += 1;
            }
        }
    }
    return islands;
};
console.log(
    numIslands([
        ['1', '1', '0', '0', '0'],
        ['1', '1', '0', '0', '0'],
        ['0', '0', '1', '0', '0'],
        ['0', '0', '0', '1', '1'],
    ])
);
