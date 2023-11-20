/**
 * this problem can be solved by a stack technique called
 * monotonic decreasing stack
 *
 * Iterate through the array,
 * push the temperature and index information into the stack,
 * till the top of the stack is less than the current temperature
 *  we have pop the items in the stack one by one
 *  and compute the daily warm temperature difference
 *  between the previous index which is stored in the stack
 *  and the current index.
 * NOTE: At any point in time, we will have temperatures in the stack with
 * decreasing order
 * @param {number[]} temperatures
 */
const dailyTemperatures = (temperatures) => {
    const stack = [];
    const output = new Array(temperatures.length).fill(0);
    /**
     *
     * @param {number[]} stack
     */
    const top = (stack) => stack[stack.length - 1];
    for (let day = 0; day < temperatures.length; day++) {
        const currentTemperature = temperatures[day];
        while (
            stack.length !== 0 &&
            top(stack).temperature < currentTemperature
        ) {
            const { idx } = stack.pop();
            output[idx] = day - idx;
        }
        stack.push({ temperature: currentTemperature, idx: day });
    }
    return output;
};
console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));
