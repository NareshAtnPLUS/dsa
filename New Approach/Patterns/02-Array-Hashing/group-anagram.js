const ASCII_VALUE_OF_FIRST_ALPHABET = 'a'.charCodeAt(0);
/**
 * groups the anagrams in the words list.
 * @param {Array} wordsList
 * @returns {Array}
 */
const groupAnagrams = (wordsList) => {
    const resultMap = {};
    for (const word of wordsList) {
        const hashKey = alphabetEncodedHashFunction(word);
        if (!(hashKey in resultMap)) {
            resultMap[hashKey] = [];
        }
        resultMap[hashKey].push(word);
    }
    const result = Object.values(resultMap);
    return result;
};
const alphabetEncodedHashFunction = (word) => {
    const NUM_OF_CHARS_IN_ALPHABET = 26;
    const hash = new Array(NUM_OF_CHARS_IN_ALPHABET).fill(0);
    for (let char of word) {
        const asciiValue = char.charCodeAt(0);
        const alphabetPosition = asciiValue - ASCII_VALUE_OF_FIRST_ALPHABET;
        ++hash[alphabetPosition];
    }
    return hash.toString();
};
console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));
