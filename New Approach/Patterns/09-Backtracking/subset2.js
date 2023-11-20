/**
 * Subset with duplicate can be solved by the following steps
 * sort the nums array
 * backtracking portion, index of the nums array
 * @param {Array} nums
 */
const subsetsWithDup = (nums) => {
    const result = [];
    /**
     *
     * @param {number} idx
     * @param {Array} subset
     */
    const backtrack = (idx, subset) => {
        // Base case is if the idx reaches the final point in the nums array
        // we push the subset into the results array and stop back tracking
        if (idx === nums.length) {
            result.push(Array.from(subset));
            return;
        }
        // branching or recursive case
        // there are two decisions to be made at every step of the backtracking
        // 1. we are going to add an element to the subset
        // All subsets that include nums[idx]
        subset.push(nums[idx]);
        backtrack(idx + 1, subset);
        subset.pop();
        // 2. We are not going to add an element to the subset
        // All Subsets that do not include nums[idx]
        while (idx + 1 < nums.length && nums[idx] === nums[idx + 1]) {
            // increamenting to get passed the duplicate value.
            idx += 1;
        }
        // calling the same backtracking function without the duplicate element
        backtrack(idx + 1, subset);
    };
    backtrack(0, []);
    return result;
};
