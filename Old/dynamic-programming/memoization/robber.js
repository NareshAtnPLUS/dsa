/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  const n = nums.length - 1;
  const getMaxRobbery = (idx, nums, memo = {}) => {
    if (idx in memo) {
      // console.log(memo[idx],memo	)
      return memo[idx];
    }
    if (idx === 0) {
      return nums[idx];
    }
    if (idx < 0) {
      return 0;
    }
    const choice1 = nums[idx] + getMaxRobbery(idx - 2, nums, memo);
    const choice2 = getMaxRobbery(idx - 1, nums, memo);
    const concluded_choice = Math.max(choice1, choice2);
    memo[idx] = concluded_choice;

    return concluded_choice;
  };
  const ans1 = getMaxRobbery(n - 1, nums);

  const ans2 = getMaxRobbery(n - 1, nums.reverse());

  return Math.max(ans1, ans2);
};
console.log(rob([2, 7, 9, 3, 1]));
