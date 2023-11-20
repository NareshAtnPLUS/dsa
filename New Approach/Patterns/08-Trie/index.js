module.exports = class TrieNode {
    children;
    endOfWord;
    constructor() {
        this.children = {};
        this.endOfWord = false;
    }
};
