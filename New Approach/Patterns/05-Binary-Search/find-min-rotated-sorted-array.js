/**
 *
 * @param {number[]} nums
 */
const findMin = (nums) => {
    const findMid = (left, right) => Math.trunc((left + right) / 2);
    const setMin = (current, newValue) => Math.min(current, newValue);
    let result = nums[0];
    let [left, right] = [0, nums.length - 1];
    while (left <= right) {
        const leftNum = nums[left];
        const rightNum = nums[right];
        if (leftNum < rightNum) {
            result = setMin(result, leftNum);
            return result;
        }
        const mid = findMid(left, right);
        const guess = nums[mid];
        result = setMin(result, guess);
        /**
         * check if we are in left sorted portion
         * then we have to look into the right sorted portion
         */
        if (guess >= leftNum) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return result;
};
