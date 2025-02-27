const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = +input.shift();
const graph = {};

const routes = input.map((str) => {
  const temp = str.split(" ");
  return temp.slice(1);
});

class Node {
  constructor(value = "") {
    this.value = value;
    this.children = new Map();
  }
}

class Trie {
  constructor() {
    this.root = new Node();
  }

  insert(text) {
    let cur = this.root;

    for (const char of text) {
      // 현재 정점 간선에 char 글자가 없으면
      if (!cur.children.has(char)) {
        // 새로운 정점 만들어 추가
        cur.children.set(char, new Node(cur.value + char));
      }
      // 다음 정점으로 이동
      cur = cur.children.get(char);
    }
  }

  has(text) {
    let cur = this.root;

    for (const char of text) {
      if (!cur.children.has(char)) return false;
      cur = cur.children.get(char);
    }

    return true;
  }

  print(node = this.root, indent = 0) {
    const keys = [...node.children.keys()].sort();
    for (const key of keys) {
      console.log("-".repeat(indent) + key);
      this.print(node.children.get(key), indent + 2);
    }
  }
}

const trie = new Trie();

for (const r of routes) {
  trie.insert(r);
}

trie.print(trie.root, 0);
