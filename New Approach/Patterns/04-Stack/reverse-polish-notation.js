/**
 * Iterate through the tokens array,
 * if its not a arithmetic operator then push it to the stack
 * if it is a arithmetic operator then pop the last two elements in the
 * stack, which is the lhs and rhs of the operation
 * perform the operation and push it to the stack
 * finally pop the stack to get the result.
 * @param {string[]} tokens
 * @returns {number}
 */
const evalRPN = (tokens) => {
    const OPERATORS = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => Math.trunc(a / b),
    };
    const stack = [];
    for (let token of tokens) {
        if (token in OPERATORS) {
            const rhs = stack.pop();
            const lhs = stack.pop();
            const arithmeticFunction = OPERATORS[token];
            stack.push(arithmeticFunction(lhs, rhs));
        } else {
            stack.push(Number(token));
        }
    }
    return stack.pop();
};
