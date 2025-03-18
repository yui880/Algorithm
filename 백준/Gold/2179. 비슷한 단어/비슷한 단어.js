const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = +input.shift();
const list = input;

class Node {
  constructor(value = "") {
    this.value = value;
    this.children = new Map();
    this.wordIndices = [];
  }
}

class Trie {
  constructor() {
    this.root = new Node();
  }

  insert(text, index) {
    let cur = this.root;

    for (const char of text) {
      if (!cur.children.has(char)) {
        cur.children.set(char, new Node(cur.value + char));
      }

      cur = cur.children.get(char);
      cur.wordIndices.push(index);
    }
  }

  findLongestPrefixPair() {
    let maxPrefixLength = 0;
    let pair = [0, 1];

    const dfs = (node, depth) => {
      if (node.wordIndices.length >= 2) {
        for (let i = 0; i < node.wordIndices.length; i++) {
          for (let j = i + 1; j < node.wordIndices.length; j++) {
            const idx1 = node.wordIndices[i];
            const idx2 = node.wordIndices[j];

            if (
              depth > maxPrefixLength ||
              (depth === maxPrefixLength && (idx1 < pair[0] || (idx1 === pair[0] && idx2 < pair[1])))
            ) {
              maxPrefixLength = depth;
              pair = [idx1, idx2];
            }
          }
        }
      }

      for (const [char, childNode] of node.children) {
        dfs(childNode, depth + 1);
      }
    };

    dfs(this.root, 0);
    return pair;
  }
}

const trie = new Trie();
list.forEach((word, index) => {
  trie.insert(word, index);
});

const resultPair = trie.findLongestPrefixPair();
console.log(resultPair.map((v) => list[v]).join("\n"));
