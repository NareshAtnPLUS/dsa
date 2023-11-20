/**
 *
 * @param {number[][]} rooms
 */
const wallsAndGates = (rooms) => {
    const [ROWS, COLS] = [rooms.length, rooms[0].length],
        visited = new Set(),
        queue = [],
        [WALL, GATE] = [-1, 0],
        directions = [
            [-1, 0],
            [1, 0],
            [0, -1],
            [0, 1],
        ];
    /**
     *
     * @param {number} row
     * @param {number} col
     */
    const addRoom = (row, col) => {
        const node = encodeNode(row, col);
        if (
            Math.min(row, col) < 0 ||
            row === ROWS ||
            col === COLS ||
            visited.has(node) ||
            rooms[row][col] === WALL
        ) {
            return;
        }
        visited.add(node);
        queue.push([row, col]);
    };
    /**
     *
     * @param {number} row
     * @param {number} col
     * @returns
     */
    const encodeNode = (row, col) => `${row},${col}`;
    for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
            if (rooms[r][c] === GATE) {
                const node = encodeNode(r, c);
                queue.push([r, c]);
                visited.add(node);
            }
        }
    }
    // performing bfs
    let distance = 0;
    while (queue.length > 0) {
        for (let i = queue.size() - 1; 0 <= i; i--) {
            const [row, col] = queue.shift();
            // intializing the level to the level distance
            // after every iteration the distance from the gate increases
            rooms[row][col] = distance;
            for (let [dr, dc] of directions) {
                const [curr_row, curr_col] = [row + dr, col + dc];
                addRoom(curr_row, curr_col);
            }
        }
        distance += 1;
    }
};
console.log(
    wallsAndGates([
        [2147483647, -1, 0, 2147483647],
        [2147483647, 2147483647, 2147483647, -1],
        [2147483647, -1, 2147483647, -1],
        [0, -1, 2147483647, 2147483647],
    ])
);
