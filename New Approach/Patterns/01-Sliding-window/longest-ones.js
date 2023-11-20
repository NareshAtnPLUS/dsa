const getLongestOnesInArray = (array, K) => {
    let windowStart = 0,
        maxOnesCount = 0,
        maxLength = 0;
    const getWindowSize = (windowStart, windowEnd) =>
        windowEnd - windowStart + 1;
    for (let windowEnd = 0; windowEnd < array.length; windowEnd++) {
        const rightElement = array[windowEnd];
        if (rightElement === 1) {
            maxOnesCount += 1;
        }
        while (getWindowSize(windowStart, windowEnd) - maxOnesCount > K) {
            const leftElement = array[windowStart];
            if (leftElement === 1) {
                maxOnesCount -= 1;
            }
            windowStart += 1;
        }
        maxLength = Math.max(maxLength, getWindowSize(windowStart, windowEnd));
    }
    return maxLength;
};
console.log(getLongestOnesInArray([0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1], 2));
