/**
 * Encoding using the following rules.
 * Add the length of the integer and the # symbol (or any other special chars)
 * to encode the word list into a string
 * @param {string[]} wordList
 * @returns
 */
const PUBLIC_KEY = '$';
const encode = function (wordList) {
    let result = '';
    for (let word of wordList) {
        result += `${word.length}${PUBLIC_KEY}${word}`;
    }
    return result;
};
/**
 * use two pointer method to solve the decoding issue
 * start the xPointer, yPointer at 0 where the len of the word is located
 * increament the yPointer till you see the # character. use while loop since
 * 10s and 100s etc, are more than 2 character representation of the numbers
 * so our next word will start at yPointer+1 and the length of the word
 * will be int version of characters from xPointer to yPointer
 * now regenerate the word with the yPointer + 1 and length of the word info.
 * @param {string} wordString
 */
const decode = function (wordString) {
    let result = [],
        iPointer = 0;
    while (iPointer < wordString.length) {
        let jPointer = iPointer;
        while (wordString[jPointer] !== PUBLIC_KEY) {
            jPointer++;
        }
        const lenOfWord = parseInt(wordString.slice(iPointer, jPointer));
        const startOfData = jPointer + 1,
            endOfData = jPointer + lenOfWord + 1;
        const word = wordString.slice(startOfData, endOfData);
        result.push(word);
        // begining of the len of the word for the next string
        iPointer = endOfData;
    }
    return result;
};
console.log(decode(encode(['Hello', 'World'])));
