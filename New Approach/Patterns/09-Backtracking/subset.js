/**
 *
 * @param {Array} nums
 */
const subsset = (nums) => {
    const result = [];
    let subset = [];
    /**
     *
     * @param {number} idx
     */
    const dfs = (idx) => {
        // we are going to push the subset into the results array
        // because we reached the final or last nums value previously.
        if (idx >= nums.length) {
            // copying subset and using it to push it to results array
            result.push(Array.from(subset));
            return;
        }
        // the same function call happening twice, but with different
        // subset given to it.
        // decision to include nums[idx]
        subset.push(nums[idx]);
        dfs(idx + 1);

        // decsion to not to include nums[idx]
        // take the subset array and pop the element, we just appended
        subset.pop();
        dfs(idx + 1);
    };
    dfs(0);
    return res;
};
