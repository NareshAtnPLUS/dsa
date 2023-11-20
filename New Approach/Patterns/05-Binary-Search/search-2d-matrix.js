/**
 * This approach is a O (log n) algorithm
 * There are two steps in this algorithm, first step is to find
 * the rowIndex
 *
 * Finding the rowIndex we have to check for the two conditions
 * 1. is the current row is less than the first element of the row
 *   then bottom = current row -1 avoiding the greater values
 * 2. is the current row is greater than the last element of the
 * current tow
 *   then top = current row +1 avoiding the lesser values.
 * 3. else case we have the found the row index where out target
 * might be available
 * return the rowIndex
 *
 * take the rowIndex and send the respective array from the matrix to
 * the find target function, which finds the target, if its available
 * else it returns -1
 *
 * finally check for the result is greater than or equal to 0,
 * if it is then return true else false
 * @param {number[][]} matrix
 * @param {number} target
 */
const searchMatrix = (matrix, target) => {
    const rowIndex = findRow(matrix, target);

    const index =
        rowIndex < 0 ? rowIndex : findTarget(matrix[rowIndex], target);
    return index >= 0;
};
/**
 *
 * @param {number[][]} matrix
 * @param {number} target
 */
const findRow = (matrix, target) => {
    let [top, bottom] = [0, matrix.length - 1];
    while (top <= bottom) {
        const row = Math.trunc((top + bottom) / 2);

        if (target > matrix[row].at(-1)) {
            top = row + 1;
        } else if (target < matrix[row].at(0)) {
            bottom = row - 1;
        } else {
            // target is in the current row
            return row;
        }
    }
    return -1;
};
/**
 *
 * @param {number[]} arr
 * @param {number} target
 */
const findTarget = (arr, target) => {
    let [left, right] = [0, arr.length - 1];
    while (left <= right) {
        const mid = Math.trunc((left + right) / 2);
        const guess = arr[mid];

        if (target > guess) {
            left = mid + 1;
        } else if (target < guess) {
            right = mid - 1;
        } else {
            return mid;
        }
    }
    return -1;
};

console.log(searchMatrix([[1]], 1));
