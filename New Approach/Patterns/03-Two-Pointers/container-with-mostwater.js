/**
 * 
 * @param {Array} heights 
 * @returns {number}
 */
const maxArea = (heights) => {
    let [left, right] = [0, heights.length - 1];
    let maxAreaResult = 0;
    while (left < right) {
        const [leftHeight, rightHeight] = [heights[left], heights[right]];
        const area = (right - left) * Math.min(leftHeight, rightHeight);
        maxAreaResult = Math.max(maxAreaResult, area);
        if (leftHeight <= rightHeight) {
            left++;
        } else if (leftHeight > rightHeight) {
            right--;
        }
    }
    return maxAreaResult;
};
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
