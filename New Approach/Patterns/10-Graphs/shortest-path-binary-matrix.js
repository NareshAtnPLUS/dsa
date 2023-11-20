/**
 *
 * @param {number[]} grid
 */
const shortestPathBinaryMatrix = (grid) => {
    const encodeNode = (row, col) => `${row},${col}`;
    const N = grid.length,
        STARTING_CO_ORDINATES = [0, 0], // [row,col,length]
        queue = [[...STARTING_CO_ORDINATES, 1]],
        visited = new Set(),
        directions = [
            [0, 1],
            [1, 0],
            [0, -1],
            [-1, 0],
            [1, 1],
            [-1, -1],
            [1, -1],
            [-1, 1],
        ];
    visited.add(encodeNode(...STARTING_CO_ORDINATES));
    while (queue.length > 0) {
        const [r, c, len] = queue.shift();
        const curr_node = encodeNode(r, c);
        // since its a square matrix we can replace this
        // row === N || col === N type conditional with
        // Math.max(r,c) > N
        // we still have to process the visited node, so we are not checking for the
        // the visited case
        if (Math.min(r, c) < 0 || Math.max(r, c) === N || grid[r][c] === 1) {
            continue; // to next iteration of the loop
        }
        if (r === N - 1 && c === N - 1) {
            return len;
        }
        for (let [dr, dc] of directions) {
            const [row, col] = [r + dr, c + dc];
            const new_node = encodeNode(row, col);
            if (!visited.has(new_node)) {
                queue.push([row, col, len + 1]);
                visited.add(new_node);
            }
        }
    }
    return -1;
};

const grid = [
    [0, 0, 0],
    [1, 1, 0],
    [1, 1, 0],
];
console.log(shortestPathBinaryMatrix(grid));
