/**
 *
 * @param {number} n
 */
const generateParantheses = (n) => {
    /**
     * only add open paranthesis if the open < n
     * only add close paranthesis if the closed < open
     * valid combinations only if open === closed === n
     */
    const curr_combination = [],
        combinations = [];
    const backtrack = (openN, closedN) => {
        if (openN === n && closedN === n) {
            combinations.push(curr_combination.join(''));
            return;
        }

        if (openN < n) {
            curr_combination.push('(');
            backtrack(openN + 1, closedN);
            curr_combination.pop();
        }
        if (closedN < openN) {
            curr_combination.push(')');
            backtrack(openN, closedN + 1);
            curr_combination.pop();
        }
    };
    backtrack(0, 0);
    return combinations;
};
console.log(generateParantheses(3));
