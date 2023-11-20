const smallestSubArrSum = (minSum, nums) => {
    let windowStart = 0,
        windowSum = 0,
        minLength = Infinity;
    for (let windowEnd = 0; windowEnd < nums.length; windowEnd++) {
        const num = nums[windowEnd];
        windowSum += num;
        while (windowSum >= minSum) {
            minLength = Math.min(minLength, windowEnd - windowStart + 1);
            windowSum -= nums[windowStart];
            windowStart += 1;
        }
    }
    if (minLength === Infinity) {
        return 0;
    }
    return minLength;
};
console.log(
    `Smallest subarray length: ` + smallestSubArrSum(7, [2, 1, 5, 2, 3, 2])
);
console.log(
    `Smallest subarray length: ` + smallestSubArrSum(7, [2, 1, 5, 2, 8])
);
console.log(
    `Smallest subarray length: ` + smallestSubArrSum(8, [3, 4, 1, 1, 6])
);
