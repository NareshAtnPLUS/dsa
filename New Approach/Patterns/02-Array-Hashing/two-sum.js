/**
 * one pass through the array, when passing through the array
 * update the prevHashMap with the current n and its index as value,
 * so that in future if we have the difference exactly that number
 * we will look it up and use it. return it as the result.
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    const prevHashMap = {};
    for (let index = 0; index < nums.length; index++) {
        const n = nums[index];
        const difference = target - n;
        if (difference in prevHashMap) {
            return [prevHashMap[difference], index];
        }
        prevHashMap[n] = index;
    }
    return;
};
