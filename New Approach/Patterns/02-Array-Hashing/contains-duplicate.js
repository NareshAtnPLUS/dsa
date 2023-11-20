/**
 * Here im using a data structure called hashmap
 * to get unique characters in the number array
 * if both the unique length and nums length matches
 * then it wont contain a duplicate
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    const uniqueNums = [...new Set(nums)];
    if (uniqueNums.length === nums.length) {
        return false;
    }
    return true;
};
