/**
 *
 * @param {number[][]} grid
 */
const orangesRotting = (grid) => {
    const queue = [],
        [ROWS, COLS] = [grid.length, grid[0].length],
        [EMPTY_CELL, FRESH_ORANGE, ROTTEN_ORANGE] = [0, 1, 2],
        directions = [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1],
        ],
        orangeMap = { 0: 'EMPTY_CELL', 1: 'FRESH_ORANGE', 2: 'ROTTEN_ORANGE' };
    let [time, fresh] = [0, 0];
    for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
            if (grid[r][c] === FRESH_ORANGE) {
                // increamenting the fresh oranges count
                fresh += 1;
            }
            if (grid[r][c] === ROTTEN_ORANGE) {
                // pushing intial rotten oranges
                queue.push([r, c]);
            }
        }
    }
    // this while loop will stop when there is not item in the queue
    // there is not fresh oranges in the grid
    // in other words, this loop will run till there is
    // items in the queue and there are fresh oranges
    while (queue.length > 0 && fresh > 0) {
        const queueLength = queue.length;
        for (let idx = 0; idx < queueLength; idx++) {
            const [row, col] = queue.shift();
            for (let [dr, dc] of directions) {
                const [curr_row, curr_col] = [row + dr, col + dc];
                // check if the curr row and col are in bounds and it is in
                // fresh oranges to make it rotten
                // we dont want to visit rotten oranges and perform rotting operation
                // so we are continuing to the next iteration;
                if (
                    Math.min(curr_row, curr_col) < 0 ||
                    curr_row === ROWS ||
                    curr_col === COLS ||
                    grid[curr_row][curr_col] === ROTTEN_ORANGE ||
                    grid[curr_row][curr_col] === EMPTY_CELL
                    // below condition can also be used
                    // grid[curr_row][curr_col] !== FRESH_ORANGE
                ) {
                    continue;
                }
                // we are rottening the fresh orn
                const curr_value = orangeMap[grid[curr_row][curr_col]];
                grid[curr_row][curr_col] = ROTTEN_ORANGE;
                queue.push([curr_row, curr_col]);
                fresh -= 1;
            }
        }
        time += 1;
    }
    return fresh === 0 ? time : -1;
};
const grid = [
    [2, 1, 1],
    [1, 1, 0],
    [0, 1, 1],
];
console.log(orangesRotting(grid));
