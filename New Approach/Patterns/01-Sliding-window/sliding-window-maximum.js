/**
 *
 * @param {number[]} nums
 * @param {number} SLIDING_WINDOW_SIZE
 */
const maxSlidingWindow = (nums, SLIDING_WINDOW_SIZE) => {
    const output = [],
        deque = [];
    let windowStart = 0;
    for (let windowEnd = 0; windowEnd < nums.length; windowEnd++) {
        const rightNumber = nums[windowEnd];
        while (
            deque.length > 0 &&
            nums[deque[deque.length - 1]] < rightNumber
        ) {
            deque.pop();
        }
        deque.push(windowEnd);
        if (windowStart > deque[0]) {
            deque.shift();
        }
        if (windowEnd + 1 >= SLIDING_WINDOW_SIZE) {
            output.push(nums[deque[0]]);
            windowStart += 1;
        }
    }
    return output;
};
console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3));
