const rob = function (nums) {
  const getMaxRobbery = (nums, n) => {
    const dp = [...nums];
    if (nums.length === 1) {
      return nums[0];
    }
    dp[1] = Math.max(nums[0], nums[1]);
    for (let i = 2; i < n; i++) {
      const currentLoot = nums[i] + dp[i - 2];
      dp[i] = Math.max(dp[i - 1], currentLoot);
    }
    return dp[dp.length - 1];
  };
  const n = nums.length - 1;
  const answer1 = getMaxRobbery(n > 0 ? nums.slice(0, n) : nums, n);
  const answer2 = getMaxRobbery(n > 0 ? nums.reverse().slice(0, n) : nums, n);
  return Math.max(answer1, answer2);
};

console.log(rob([0]));
