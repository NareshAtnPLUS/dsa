const TrieNode = require('.');

class WordDictionary {
    root;
    constructor() {
        this.root = new TrieNode();
    }
    addWord(word) {
        let curr = this.root;
        for (let char of word) {
            // if char is not there we have to insert a new trie node
            // for that char
            if (!(char in curr.children)) {
                curr.children[char] = new TrieNode();
            }
            // if it already exists we shifted over to the existing one
            // for the next possible iteration
            curr = curr.children[char];
        }
        curr.endOfWord = true;
    }
    search(word) {
        /**
         *
         * @param {*} jdx
         * @param {TrieNode} root
         * @returns
         */
        const dfs = (jdx, root) => {
            let curr = root;
            for (let idx = jdx; idx < word.length; idx++) {
                const char = word[idx];
                if (char === '.') {
                    for (let child in curr.children) {
                        const childValue = curr.children[child];
                        if (dfs(idx + 1, childValue)) {
                            return true;
                        }
                    }
                    return false;
                } else {
                    // if char is a regular character and not a wildcard
                    if (!(char in curr.children)) {
                        return false;
                    }
                    curr = curr.children[char];
                }
            }
            return curr.endOfWord;
        };
        const result = dfs(0, this.root);
        return result;
    }
}
const wordDictionary = new WordDictionary();
console.log(wordDictionary.addWord('bad'));
console.log(wordDictionary.addWord('dad'));
console.log(wordDictionary.addWord('mad'));
console.log(wordDictionary.search('pad'));
console.log(wordDictionary.search('bad'));
console.log(wordDictionary.search('.ad'));
console.log(wordDictionary.search('b..'));
