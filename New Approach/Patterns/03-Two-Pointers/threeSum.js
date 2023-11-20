/**
 *
 * @param {Array} nums
 */
const threeSum = (nums) => {
    nums.sort((a, b) => a - b);
    const isPreviousDuplicate = (nums, index) =>
        nums[index] === nums[index - 1];
    const isNextDuplicate = (nums, index) => nums[index] === nums[index + 1];
    /**
     *
     * @param {Array} nums
     */
    const search = (nums) => {
        const result = [];
        /**
         * for every iteration compute the two sum with the target of negative of
         * first element, if its a previousDuplicate then continue
         * to execute the next iteration
         */
        for (let index = 0; index < nums.length; index++) {
            if (isPreviousDuplicate(nums, index)) {
                continue;
            }
            const first = nums[index];
            let [target, left, right] = [-first, index + 1, nums.length - 1];
            while (left < right) {
                const [second, third] = [nums[left], nums[right]];
                const sum = second + third;

                const isTarget = sum === target;

                if (isTarget) {
                    result.push([first, second, third]);
                    left++;
                    right--;

                    while (left < right && isPreviousDuplicate(nums, left)) {
                        left++;
                    }
                    while (left < right && isNextDuplicate(nums, right)) {
                        right--;
                    }
                }
                // increament the left pointer if the sum is less than the target
                if (sum < target) {
                    left++;
                } else if (sum > target) {
                    right--;
                }
            }
        }
        return result;
    };
    return search(nums);
};
console.log(threeSum([-1, 0, 1, 2, -1, -4]));
