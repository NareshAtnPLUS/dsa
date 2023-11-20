/**
 *
 * @param {string[][]} board
 * @returns {boolean}
 */
const SUDUKO_COL_SIZE = 9;
const SUDUKO_ROW_SIZE = 9;
const SUB_GRID_ROW_SIZE = 3;
const SUB_GRID_COL_SIZE = 3;
const isValidSudoku = function (board) {
    const rowsHashMap = {},
        colsHashMap = {},
        gridsHashMap = {};
    for (let row = 0; row < SUDUKO_ROW_SIZE; row++) {
        for (let col = 0; col < SUDUKO_COL_SIZE; col++) {
            const num = board[row][col];
            if (num === '.') {
                continue;
            }
            const grid = [
                Math.floor(row / SUB_GRID_ROW_SIZE),
                Math.floor(col / SUB_GRID_COL_SIZE),
            ].toString();

            if (!colsHashMap[col]) {
                colsHashMap[col] = new Set();
            }
            if (!rowsHashMap[row]) {
                rowsHashMap[row] = new Set();
            }
            if (!gridsHashMap[grid]) {
                gridsHashMap[grid] = new Set();
            }

            /**
             * Core filtering logic
             * 666ntered the num previously in the hash set.
             * check if the number already in the rowsHashMap[row]
             * check if the number already in the colsHashMap[col]
             * check if the number already in the gridsHashMap[grid]            *
             */
            if (
                rowsHashMap[row].has(num) ||
                colsHashMap[col].has(num) ||
                gridsHashMap[grid].has(num)
            ) {
                return false;
            }
            rowsHashMap[row].add(num);
            colsHashMap[col].add(num);
            gridsHashMap[grid].add(num);
        }
    }
    return true;
};
console.log(
    isValidSudoku([
        ['8', '3', '.', '.', '7', '.', '.', '.', '.'],
        ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
        ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
        ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
        ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
        ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
        ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
        ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
        ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
    ])
);
