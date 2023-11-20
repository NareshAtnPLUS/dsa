/**
 *
 * @param {number[][]} board
 */
const surroundedRegions = (board) => {
    const [ROWS, COLS] = [board.length, board[0].length],
        directions = [
            [-1, 0],
            [1, 0],
            [0, 1],
            [0, -1],
        ];
    /**
     * DFS function to capture the border Os and convert them into T
     * @param {number} row
     * @param {number} col
     */
    const capture = (row, col) => {
        if (
            Math.min(row, col) < 0 ||
            col === COLS ||
            row === ROWS ||
            board[row][col] !== 'O'
        ) {
            // we are only capturing only O s and converting them to T
            return;
        }
        board[row][col] = 'T';
        for (let [dr, dc] of directions) {
            const [curr_row, curr_col] = [row + dr, col + dc];
            capture(curr_row, curr_col);
        }
    };
    // phase 1 capture the unsurrounded regions (O -> T)
    for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
            // check for Os and border cells (can be row border or col border)
            // and capture the r row and c col
            if (
                board[r][c] === 'O' &&
                ([0, ROWS - 1].includes(r) || [0, COLS - 1].includes(c))
            ) {
                capture(r, c);
            }
        }
    }

    // phase 2 capture the surrounded regions (O -> X)
    for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
            // convert the Os into Xs
            if (board[r][c] === 'O') {
                board[r][c] = 'X';
            }
        }
    }
    // phase 3 uncapture the unsurrounded regions (T -> O)
    for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
            // convert Ts into Os
            if (board[r][c] === 'T') {
                board[r][c] = 'O';
            }
        }
    }
};
