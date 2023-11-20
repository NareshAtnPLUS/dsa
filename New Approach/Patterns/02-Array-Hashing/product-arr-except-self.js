/**
 * two pass array using loops,
 * intiate prefix and postfix variables with 1.
 * Compute result array with prefix products and push it into the array,
 * Compute postfix product and update the result array.
 * the result array will have the products except self values
 * @param {number[]} nums
 * @returns {number[]}
 */
const productExceptSelf = function (nums) {
    let prefix = 1,
        postfix = 1;
    const result = [];
    /**
     * in the prefix computation we are storing the prefix values
     * in the resultant arr before computing
     */
    for (let index = 0; index < nums.length; index++) {
        const num = nums[index];
        result[index] = prefix;
        prefix *= nums[index];
    }
    /**
     * in the postfix computation we are computing and storing the resultant values first
     * and then we are computing the postfix product
     */
    for (let index = nums.length - 1; index > -1; index--) {
        const num = nums[index];
        result[index] *= postfix;
        postfix *= nums[index];
    }
    return result;
};
console.log(productExceptSelf([1, 2, 3, 4]));
