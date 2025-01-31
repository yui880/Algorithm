const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m] = input.shift().split(" ").map(Number);

const list = input.map((str) => str.split(" ").map(Number)).sort((a, b) => a[2] - b[2]);
const root = Array.from({ length: n + 1 }, (_, i) => i);

// Union-Find

const find = (x) => {
  if (root[x] === x) return x;

  root[x] = find(root[x]);
  return root[x];
};

const union = (a, b) => {
  const rootA = find(a);
  const rootB = find(b);

  if (rootA === rootB) return;

  if (rootA < rootB) return (root[rootB] = rootA);
  else return (root[rootA] = rootB);
};

const isUnion = (a, b) => {
  const rootA = find(a);
  const rootB = find(b);

  if (rootA === rootB) return true;
  else return false;
};

let answer = 0;
let max = 0;

// 사이클이 만들어지지 않는 선에서 MST 생성
for (const [s, e, w] of list) {
  if (!isUnion(s, e)) {
    union(s, e);
    max = Math.max(max, w);
    answer += w;
  }
}

// 갸장 가중치 큰 간선 끊어서 2개의 마을로 분리하기
console.log(answer - max);
