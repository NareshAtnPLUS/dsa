/**
 *
 * @param {number[][]} grid
 */
const numIsland = (grid) => {
    const [ROWS, COLS] = [grid.length, grid[0].length];
    const visited = new Set();
    const encodeNode = (r, c) => `${r},${c}`;
    const range = (end) => Array.from(Array(end).keys());
    const dfs = (r, c) => {
        const node = encodeNode(r, c);
        if (
            !(r in range(ROWS)) ||
            !(c in range(COLS)) ||
            visited.has(node) ||
            grid[r][c] === '0'
        ) {
            return 0;
        }
        visited.add(node);
        const directions = [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1],
        ];
        const area =
            1 +
            directions
                .map(([dr, dc]) => {
                    const [curr_row, curr_col] = [r + dr, c + dc];
                    return dfs(curr_row, curr_col);
                })
                .reduce((a, b) => a + b, 0);
        return area;
    };
    const areas = [];
    for (let idx = 0; idx < ROWS; idx++) {
        for (let jdx = 0; jdx < COLS; jdx++) {
            const area = dfs(idx, jdx);
            if (area > 0) {
                areas.push(area);
            }
        }
    }
    return areas.length;
};
console.log(
    numIsland([
        ['1', '1', '0', '0', '0'],
        ['1', '1', '0', '0', '0'],
        ['0', '0', '1', '0', '0'],
        ['0', '0', '0', '1', '1'],
    ])
);
