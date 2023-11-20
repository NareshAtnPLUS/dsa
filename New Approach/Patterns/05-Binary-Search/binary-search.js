/**
 *
 * @param {number[]} nums
 * @param {number} target
 */
const search = function (nums, target) {
    let [left, right] = [0, nums.length - 1];

    while (left <= right) {
        const mid = Math.trunc((left + right) / 2);
        const guess = nums[mid];

        if (target > guess) {
            left = mid + 1;
        } else if (target < guess) {
            right = mid - 1;
        } else if (target === guess) {
            return mid;
        }
    }
    return -1;
};
console.log(search([1, 3, 5, 6], 2));
