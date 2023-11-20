/**
  PSEUDOCODE 
  1. intialize the window start, source and target frequency maps
        source frequency map should be pre-computed
  2. use the sliding window technique
    i. compute the frequency map for source string in the window
        using the window-end pointer by increamenting operation
    ii. compute window size
    iii. if the window size = target str's length and 
         if the source and target frequency maps are same, 
         then permutation exists in this particular window of 
         source string, return true.
    iv. if the window size is greater than or equal to target str's
        length, then slide the window in the left.
        sliding the window in the left means 
        * compute the frequency map for source string in the window
        using the window-start pointer by decreamenting operation

   3. finally return false since there is no positive case for
   permutation found.
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (targetStr, sourceStr) {
    const NUM_OF_ALPHABETS = 26,
        FIRST_LETTER_ALPHABET = 'a';
    const isSame = (sourceFrequencyMap, targetFrequencyMap) => {
        for (let idx = 0; idx < NUM_OF_ALPHABETS; idx++) {
            const isMatch = sourceFrequencyMap[idx] === targetFrequencyMap[idx];
            if (!isMatch) {
                return false;
            }
        }
        // after checking all the positions in source and target
        // frequency maps, since everything matches.
        return true;
    };
    const alphabetPosition = (char) =>
        char.charCodeAt(0) - FIRST_LETTER_ALPHABET.charCodeAt(0);
    const getFrequencyMaps = (targetStr) => {
        const [targetFrequencyMap, sourceFrequencyMap] = new Array(2)
            .fill()
            .map(() => new Array(NUM_OF_ALPHABETS).fill(0));
        for (let char of targetStr) {
            const alphabetIndex = alphabetPosition(char);
            targetFrequencyMap[alphabetIndex] += 1;
        }
        return { targetFrequencyMap, sourceFrequencyMap };
    };
    const computeFrequencyMap = (str, idx, frequencyMap, operation = 'INC') => {
        const char = str[idx];
        const alphabetIndex = alphabetPosition(char);
        if (operation === 'INC') {
            frequencyMap[alphabetIndex] += 1;
        } else {
            frequencyMap[alphabetIndex] -= 1;
        }
    };
    if (targetStr.length > sourceStr.length) {
        return false;
    }
    let windowStart = 0;
    const { targetFrequencyMap, sourceFrequencyMap } =
        getFrequencyMaps(targetStr);

    for (let windowEnd = 0; windowEnd < sourceStr.length; windowEnd++) {
        computeFrequencyMap(sourceStr, windowEnd, sourceFrequencyMap);
        const windowSize = windowEnd - windowStart + 1;
        const isPermutation =
            windowSize === targetStr.length &&
            isSame(sourceFrequencyMap, targetFrequencyMap);
        if (isPermutation) {
            return true;
        }
        const canSlideLeft = windowSize >= targetStr.length;
        if (canSlideLeft) {
            computeFrequencyMap(
                sourceStr,
                windowStart,
                sourceFrequencyMap,
                'DEC'
            );
            windowStart++;
        }
    }
    return false;
};

console.log(checkInclusion('ab', 'eidbaooo'));
