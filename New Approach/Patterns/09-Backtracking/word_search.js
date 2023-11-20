/**
 *
 * @param {string[][]} board
 * @param {string} word
 */
const exist = (board, word) => {
    const [ROWS, COLS] = [board.length, board[0].length];
    // we need a data structure to remember the visited position
    const path = new Set();

    const dfs = (row, col, idx) => {
        // the idx will get increamented on every depth of the recursion
        // so finally when the idx reaches the word length
        // we will know that we found the word in the grid
        if (idx === word.length) {
            return true;
        }
        const curr_path = `(${row},${col})`;
        /**
         * false conditions are
         * 1. out of bounds
         * 2. current char of the word not in board of curr position
         * 3. current postion is already visited
         */
        if (
            row < 0 ||
            col < 0 ||
            row >= ROWS ||
            col >= COLS ||
            word[idx] !== board[row][col] ||
            curr_path in path
        ) {
            return false;
        }
        path.add(curr_path);
        const result =
            dfs(r + 1, c, idx + 1) ||
            dfs(r - 1, c, idx + 1) ||
            dfs(r, c + 1, idx + 1) ||
            dfs(r, c - 1, idx + 1);
        // remove the curr path because we no longer visiting the position,
        // we are returning from the path
        path.delete(curr_path);
        return result;
    };
    for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
            // we are doing dfs for all positions for rows and colums
            if (dfs(r, c, 0)) {
                /**
                 * inside the dfs we are visiting cells, if cell char
                 * does not match with the current word we return false
                 * we will also increament the word idx and search in
                 * the backtracking cases
                 */
                return true;
            }
        }
    }
    return false;
};
