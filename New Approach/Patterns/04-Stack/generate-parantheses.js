/**
 *
 * @param {number} n
 */
const generateParantheses = (n) => {
    const combinations = [];
    const currentCombination = [];
    /**
     *
     * @param {number} openRemaining
     * @param {number} closesAvailable
     */
    const backTrackParantheses = (openRemaining, closesAvailable) => {
        /**
         * the base case for stopping the recursive operation
         * when the current combination is 2 times the n
         * that means we have generated the valid parantheses
         *
         * push it to the combinations array or results array.
         * and return from the function
         */
        if (currentCombination.length === n * 2) {
            combinations.push(currentCombination.join(''));
            return;
        }
        // adding open parantheses to the current combination
        if (openRemaining) {
            /**
             * generate parantheses with open parantheses till open
             * parantheses are available.
             *
             * then pop the last pushed open parantheses
             */
            currentCombination.push('(');
            backTrackParantheses(openRemaining - 1, closesAvailable + 1);
            currentCombination.pop();
        }
        /**
         * after poping last pushed open parantheses
         * generate and see for closed parantheses for every recursive stack         *
         */
        if (closesAvailable) {
            currentCombination.push(')');
            backTrackParantheses(openRemaining, closesAvailable - 1);
            currentCombination.pop();
        }
    };
    backTrackParantheses(n, 0);
    return combinations;
};
console.log(generateParantheses(3));
