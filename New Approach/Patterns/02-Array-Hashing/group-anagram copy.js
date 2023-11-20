/**
 *
 * @param {Array} stringList
 * @returns {Array<Array>}
 */
const CODES = {
    a: 0,
    b: 1,
    c: 2,
    d: 3,
    e: 4,
    f: 5,
    g: 6,
    h: 7,
    i: 8,
    j: 9,
    k: 10,
    l: 11,
    m: 12,
    n: 13,
    o: 14,
    p: 15,
    q: 16,
    r: 17,
    s: 18,
    t: 19,
    u: 20,
    v: 21,
    w: 22,
    x: 23,
    y: 24,
    z: 25,
};
const FIRST_ALPHABET_ASCII_VALUE = 'a'.charCodeAt(0);
const groupAnagrams = (words) => {
    const map = Object.create(null);
    for (const word of words) {
        const hash = hashWord(word);
        if (!(hash in map)) {
            map[hash] = [];
        }
        map[hash].push(word);
    }

    const groups = [];
    for (const key in map) {
        groups.push(map[key]);
    }
    return groups;
};
/**
 * Computes the key value for the hash map given the word as a parameter
 * @param {string} word
 * @returns string
 */
function hashWord(word) {
    const hash = new Array(26).fill(0);
    for (const ch of word) {
        const asciiValue = ch.charCodeAt(0);
        const alphabetPosition = asciiValue - FIRST_ALPHABET_ASCII_VALUE;
        ++hash[alphabetPosition];
    }
    return hash.toString();
}
console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));
