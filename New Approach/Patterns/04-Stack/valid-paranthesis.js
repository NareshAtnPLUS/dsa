/**
 * Algorithm for computing the valid parantheses is
 * we are going to iterate through the string
 * -> check if the character is a closing paranthses
 * -> if it is a closing parantheses, then  the top of the stack value
 * should match the current character,meaning that top of the stack character
 * should be the equivalent opening parantheses.
 * this can be checked by a simple closeToOpen Hashmap
 * if it failed to match the opening parantheses or the stack is empty
 * then it is not a valid parantheses; return false from here
 *
 * if it is a opening parantheses then push it to the top of the stack
 *
 * @param {string} str
 */
const isValid = (str) => {
    const stack = [],
        closeToOpenMap = new Map([
            ['}', '{'],
            [')', '('],
            [']', '['],
        ]);
    const top = (stack) => stack.at(-1);
    const isStackEmpty = (stack) => stack.length === 0;
    for (let char in str) {
        if (closeToOpenMap.has(char)) {
            const t = top(stack);
            const brace = closeToOpenMap.get(char);
            if (!isStackEmpty(stack) && t === brace) {
                stack.pop();
            } else {
                return false;
            }
        } else {
            // it is a opening bracket then push it to stack
            stack.push(char);
        }
    }
    return isStackEmpty(stack);
};
console.log(isValid('()[]{}'));
