const getLongestDistinctSubstring = (str) => {
    let maxLength = 0,
        windowStart = 0,
        charIndexHashMap = {};
    for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
        const rightChar = str[windowEnd];
        /**
         * if the right character is present in charIndexHashMap,
         * shrink the window by updating the windowStart index
         * so that we will have only one occurrence
         * of the character in our computation
         */
        if (rightChar in charIndexHashMap) {
            windowStart = Math.max(
                windowStart,
                charIndexHashMap[rightChar] + 1
            );
        }
        charIndexHashMap[rightChar] = windowEnd;
        maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
    }
    return maxLength;
};

console.log(getLongestDistinctSubstring('abcabcbb'));
