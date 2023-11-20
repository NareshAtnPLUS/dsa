/**
 * Using a Hashmap data structure to note the frequency
 * of the characters in the target string.
 * then decreament the frequency of the characters
 * by looking at the source string.
 * Finally looping through the charFrequencyMap
 * and checking characters frequency is not 0,
 * if not 0 then return false
 * once its completes the final loop then it is a
 * valid anagram
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    const charFrequencyMap = {};
    for (let char of t) {
        if (!(char in charFrequencyMap)) {
            charFrequencyMap[char] = 0;
        }
        charFrequencyMap[char] += 1;
    }
    for (let char of s) {
        charFrequencyMap[char] -= 1;
    }
    for (let char in charFrequencyMap) {
        if (charFrequencyMap[char] !== 0) {
            return false;
        }
    }
    return true;
};

console.log(isAnagram('anagram', 'nagaram'));
