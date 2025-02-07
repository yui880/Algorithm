const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m] = input.shift().split(" ").map(Number);
const list = input.map((str) => str.split(" ").map(Number));

const graph = Array.from({ length: n }, () => []);

list.forEach(([s, e]) => {
  graph[s].push(e);
});

const root = Array.from({ length: n }, (_, i) => i);

const find = (x) => {
  if (root[x] === x) return x;

  root[x] = find(root[x]);
  return root[x];
};

const union = (a, b) => {
  const rootA = find(a);
  const rootB = find(b);

  if (rootA === rootB) return;

  if (rootA < rootB) root[rootB] = rootA;
  else root[rootB] = rootA;
};

const isUnion = (a, b) => {
  const rootA = find(a);
  const rootB = find(b);

  if (rootA === rootB) return true;
  else return false;
};

let answer = 0;

for (let i = 0; i < list.length; i++) {
  const [s, e] = list[i];

  if (isUnion(s, e)) {
    answer = i + 1;
    break;
  }
  union(s, e);
}

console.log(answer);
