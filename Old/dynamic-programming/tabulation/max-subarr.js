const maxSubArray = function(nums){
  const dp = nums
  const solve = (nums) => {
    for(let i = 1;i < nums.length;i++) {
      const sum = dp[i-1] + nums[i]     
      dp[i] = Math.max(sum,dp[i])
    }
    return Math.max(...dp)
  }
  return solve(nums)
}
console.log(maxSubArray([5,4,-1,7,8]))