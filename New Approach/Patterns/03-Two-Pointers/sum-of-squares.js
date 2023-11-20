const SQUARE_EXPONENT = 2;
const judgeSquareSum = (c) => {
    /**
     *
     * @param {number} num
     * @returns {number}
     */
    const square = (num) => Math.pow(num, SQUARE_EXPONENT);
    /**
     *
     * @param {number} left
     * @param {number} right
     * @returns
     */

    let [left, right] = [0, Math.trunc(Math.sqrt(c))];
    while (left <= right) {
        const squareSum = square(left) + square(right);
        if (squareSum === c) {
            // console.log(left, right);
            return true;
        }
        if (squareSum > c) {
            right -= 1;
        }
        if (squareSum < c) {
            left += 1;
        }
    }
    return false;
};
console.log(judgeSquareSum(2));
