/**
 *
 * @param {number[][]} grid
 */
const maxAreaOfIsland = (grid) => {
    const [ROWS, COLS] = [grid.length, grid[0].length];
    const visited = new Set();
    const encodeNode = (r, c) => `${r},${c}`;
    let maxArea = 0;
    const dfs = (r, c) => {
        const node = encodeNode(r, c);
        if (
            r < 0 ||
            c < 0 ||
            r === ROWS ||
            c === COLS ||
            visited.has(node) ||
            grid[r][c] === 0
        ) {
            return 0;
        }
        visited.add(node);
        return (
            1 + dfs(r - 1, c) + dfs(r + 1, c) + dfs(r, c - 1) + dfs(r, c + 1)
        );
    };
    for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
            maxArea = Math.max(maxArea, dfs(r, c));
        }
    }
    return maxArea;
};
