const getLeongthOfLongestSubstring = (str, K) => {
    const getWindowSize = (windowStart, windowEnd) =>
        windowEnd - windowStart + 1;
    let windowStart = 0,
        maxLength = 0,
        maxRepeatingLetterCount = 0,
        frequencyMap = {};
    for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
        const rightChar = str[windowEnd];
        if (!(rightChar in frequencyMap)) {
            frequencyMap[rightChar] = 0;
        }
        frequencyMap[rightChar] += 1;

        maxRepeatingLetterCount = Math.max(
            maxRepeatingLetterCount,
            frequencyMap[rightChar]
        );
        /**
         * if the difference between the window size and maxRepeatingLetterCount is greater than K, then it is the value to be replaced
         */
        while (
            getWindowSize(windowStart, windowEnd) - maxRepeatingLetterCount >
            K
        ) {
            const leftChar = str[windowStart];
            frequencyMap[leftChar] -= 1;
            windowStart += 1;
        }
        maxLength = Math.max(maxLength, getWindowSize(windowStart, windowEnd));
    }
    return maxLength;
};
console.log(getLeongthOfLongestSubstring('aabccbb', 2));
