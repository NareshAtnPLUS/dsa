const TrieNode = require('.');

class Trie {
    root;
    constructor() {
        this.root = new TrieNode();
    }
    insert(word) {
        let curr = this.root;
        for (let char of word) {
            if (!(char in curr.children)) {
                curr.children[char] = new TrieNode();
            }
            curr = curr.children[char];
        }
        curr.endOfWord = true;
    }
    search(word) {
        let curr = this.root;
        for (let char of word) {
            if (!(char in curr.children)) {
                return false;
            }
            curr = curr.children[char];
        }
        return curr.endOfWord;
    }
    startsWith(prefix) {
        let curr = this.root;
        for (let char of prefix) {
            if (!(char in curr.children)) {
                return false;
            }
            curr = curr.children[char];
        }
        return true;
    }
}
const trie = new Trie();
console.log('insert', trie.insert('apple'));
console.log('search', trie.search('apple'));
console.log('startsWith', trie.startsWith('app'));
console.log('search', trie.search('appa'));
console.log('insert', trie.insert('appa'));
console.log('search', trie.search('appa'));
