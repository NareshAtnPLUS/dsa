/**
 * Algorithm to find permutation in string
 * We're going to use sliding window technique for solving this problem
 * One of the base case is to check whether the target length is not
 * greater than source length
 * intiate the windowStart to zero,
 * get source and targetFrequencyMap
 * use sliding window,
 * first, addRightFrequency to the sourceFrequencyMap
 * check if the windowSize === target.length and source and targetFrequencyMap
 * isSame.
 * if it is same then premutation exists return true
 * when sliding the window subtractLeftFrequency from the sourceFrequencyMap
 * and increament the windowStart
 * if none of the cases have permutation then return false at the end of the
 * function
 * @param {string} target
 * @param {string} source
 */
const FIRST_LETTER_OF_ALPHABET = 'a';
const ALPHABETS_COUNT = 26;
const checkInclusion = function (target, source) {
    if (target.length > source.length) {
        return false;
    }
    let windowStart = 0;
    const { sourceFrequencyMap, targetFrequencyMap } = getFrequencyMaps(target);

    for (let windowEnd = 0; windowEnd < source.length; windowEnd++) {
        addRightFrequency(source, windowEnd, sourceFrequencyMap);
        /**
         * Check if the permutaion exists
         * it is done by checking if the windowSize is equal to the
         * target string length and check if source and
         * targetFrequencyMaps are same.
         * if permutation exists return true
         */
        const windowSize = windowEnd - windowStart + 1;
        const isPermutation =
            windowSize === target.length &&
            isSame(targetFrequencyMap, sourceFrequencyMap);
        if (isPermutation) {
            return true;
        }
        /**
         * if it can slide then subtract the frequency from the left
         */
        const canSlide = target.length <= windowSize;
        if (canSlide) {
            subtractLeftFrequency(source, windowStart, sourceFrequencyMap);
            windowStart++;
        }
    }
    return false;
};
const getFrequencyMaps = (targetString) => {
    const [targetFrequencyMap, sourceFrequencyMap] = new Array(2)
        .fill()
        .map(() => new Array(ALPHABETS_COUNT).fill(0));
    for (let char of targetString) {
        targetFrequencyMap[alphabetPosition(char)]++;
    }
    return { sourceFrequencyMap, targetFrequencyMap };
};
const isSame = (targetFrequencyMap, sourceFrequencyMap) => {
    for (let index = 0; index < ALPHABETS_COUNT; index++) {
        const isMatch = sourceFrequencyMap[index] === targetFrequencyMap[index];
        if (!isMatch) {
            return false;
        }
    }
    return true;
};
/**
 *
 * @param {string} char
 * @returns
 */
const alphabetPosition = (char) =>
    char.charCodeAt(0) - FIRST_LETTER_OF_ALPHABET.charCodeAt(0);
const addRightFrequency = (source, windowEnd, frequencyMap) => {
    const char = source[windowEnd];
    const index = alphabetPosition(char);
    frequencyMap[index]++;
    return frequencyMap[index];
};
const subtractLeftFrequency = (source, windowStart, frequencyMap) => {
    const char = source[windowStart];
    const index = alphabetPosition(char);
    frequencyMap[index]--;
    return frequencyMap[index];
};

console.log(checkInclusion('ab', 'eidbaooo'));
