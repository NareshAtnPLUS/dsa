/**
 * The concept or pattern I'm going to learn here is
 * sliding window pattern. This helps to solve array and string related problems
 * It is one of the most important pattern used in solving algorthmic problems
 * @param {number} k
 * @param {Array} arr
 */
const findAverageOfSubArr = (k, arr) => {
    const result = [];
    /**
     * tracker used to keep track of the sum of elements in the window
     */
    let windowSum = 0.0;
    /**
     * start index of the sliding window
     */
    let windowStart = 0;
    for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
        // add the element
        windowSum += arr[windowEnd];
        /**
         * if sliding window is greater than or equal to K
         * re calculate the window sum;
         * by decreamenting the value of windowStart in array from windowSum;
         * finally increamenting the windowStart index by 1
         */
        if (windowEnd >= k - 1) {
            result.push(windowSum / K);
            windowSum -= arr[windowStart];
            windowStart += 1;
        }
    }
    return result;
};
console.log(findAverageOfSubArr(5, [1, 3, 2, 6, -1, 4, 1, 8, 2]));
