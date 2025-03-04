const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [v, e] = input.shift().split(" ").map(Number);
const list = input.map((str) => str.split(" ").map(Number)).sort((a, b) => a[2] - b[2]);
const root = Array.from({ length: v + 1 }, (_, i) => i);

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
  else root[rootA] = rootB;
};

const isUnion = (a, b) => {
  const rootA = find(a);
  const rootB = find(b);

  if (rootA === rootB) return true;
  else return false;
};

let answer = 0;

for (const [s, e, w] of list) {
  if (!isUnion(s, e)) {
    union(s, e);
    answer += w;
  }
}

console.log(answer);
