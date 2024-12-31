const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let idx = 0;
const [n, m] = input[idx++].split(" ").map(Number);
const list = [];

while (input.length > idx) {
  list.push(input[idx++].split(" ").map((v) => Number(v) - 1));
}

const root = Array.from({ length: n }, (_, i) => i);

const find = (x) => {
  if (x === root[x]) return x;

  return (root[x] = find(root[x]));
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

for (const [a, b] of list) {
  const flag = isUnion(a, b);

  if (flag) answer++; // 연결 시 사이클이 만들어지면 연결을 끊는다.
  else union(a, b); // 사이클이 만들어지지 않으면 트리로 병합한다.
}

const roots = new Set(root.map(find)); // 마지막 남은 루트들을 트리로 연결한다.

console.log(answer + roots.size - 1);
