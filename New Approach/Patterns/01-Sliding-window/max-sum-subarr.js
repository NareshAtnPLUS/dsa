const findMaximumSumOfContagiousSubArr = (nums, K) => {
    const result = [];
    let windowStart = 0,
        windowSum = 0.0;
    for (let windowEnd = 0; windowEnd < nums.length; windowEnd++) {
        windowSum += nums[windowEnd];
        if (windowEnd >= K - 1) {
            result.push(windowSum);
            windowSum -= nums[windowStart];
            windowStart += 1;
        }
    }
    const maximumSubArraySum = Math.max(...result);
    return maximumSubArraySum;
};
console.log(findMaximumSumOfContagiousSubArr([2, 1, 5, 1, 3, 2], 3));
console.log(findMaximumSumOfContagiousSubArr([2, 3, 4, 1, 5], 2));
