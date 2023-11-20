const canJump = function (nums) {
  const n = nums.length;
  const dp = Array(n).fill(0);
  // seed value
  dp[0] = nums[0];
  for (let idx = 1; idx < nums.length; idx++) {
    if (dp[idx - 1] < idx) {
      return false;
    }
    dp[idx] = Math.max(idx + nums[idx], dp[idx - 1]);

    if (dp[idx] >= n - 1) {
      return true;
    }
  }
  return dp[n - 2] >= n - 1;
};

console.log(canJump([3, 2, 1, 0, 4]));
console.log(canJump([2, 3, 1, 1, 4]));
