/**
 *
 * @param {Array} nums
 */
const permute = (nums) => {
    /**
     *
     * @param {Array} nums
     * @param {Array} permutation
     * @param {Array} permutations
     */
    const backtrack = (nums, idx, permutation, permutations) => {
        permutation.push(nums[idx]);
        dfs(nums, permutation, permutations);
        permutation.pop();
    };
    /**
     *
     * @param {Array} nums
     * @param {Array} permutations
     * @param {Array} permutation
     */
    const dfs = (nums, permutation, permutations) => {
        if (nums.length === permutation.length) {
            permutations.push(Array.from(permutation));
            return;
        }
        for (let idx = 0; idx < nums.length; idx++) {
            if (permutation.includes(nums[idx])) {
                continue;
            }
            backtrack(nums, idx, permutation, permutations);
        }
        return permutations;
    };
    const result = dfs(nums, [], []);
    return result;
};
const result = permute([1, 2, 3]);
console.log(result);
