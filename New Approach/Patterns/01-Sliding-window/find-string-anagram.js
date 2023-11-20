/**
 * The core logic behind the function is at any point in the window
 * the matched value is equal to the unique characters in the pattern
 * then the substring of the corresponding window will have the permutation
 * @param {string} str
 * @param {string} target
 */
const findAnangramIndices = (str, target) => {
    const result = [];
    let windowStart = 0,
        matched = 0,
        charMap = {};

    // computing the character frequency in the target pattern
    for (let index = 0; index < target.length; index++) {
        const element = target[index];
        if (!(element in charMap)) {
            charMap[element] = 0;
        }
        charMap[element] += 1;
    }

    for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
        const rightElement = str[windowEnd];
        if (rightElement in charMap) {
            charMap[rightElement] -= 1;
            if (charMap[rightElement] === 0) {
                matched += 1;
            }
        }
        /**
         * if the matched value is equal to the unique value
         * in the charMap HashMap, then the corresponding window will have the
         * desired permutation.
         */
        if (matched === Object.keys(charMap).length) {
            result.push(windowStart);
        }
        if (windowEnd >= target.length - 1) {
            const leftElement = str[windowStart];
            windowStart += 1;
            if (leftElement in charMap) {
                if (charMap[leftElement] === 0) {
                    matched -= 1;
                }
                charMap[leftElement] += 1;
            }
        }
    }
    return result;
};
console.log(
    `Anagram exists in start indices: ${findAnangramIndices('abbcabc', 'abc')}`
);
