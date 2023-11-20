/**
 * Use Hashmap when asked about distinct characters
 * slide through the window and
 * @param {string} str
 * @param {number} K
 * @returns
 */
const getKLongestSubstring = (str, K) => {
    let maxLength = 0;
    let windowStart = 0,
        charFrequency = {};
    for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
        const rightChar = str[windowEnd];
        if (!(rightChar in charFrequency)) {
            charFrequency[rightChar] = 0;
        }
        charFrequency[rightChar] += 1;
        while (Object.keys(charFrequency).length > K) {
            const leftChar = str[windowStart];
            charFrequency[leftChar] -= 1;
            if (charFrequency[leftChar] === 0) {
                delete charFrequency[leftChar];
            }
            windowStart += 1;
        }
        // console.log(charFrequency, windowEnd, windowStart);
        maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
    }
    return maxLength;
};
console.log(getKLongestSubstring('cbbebi', 3));
