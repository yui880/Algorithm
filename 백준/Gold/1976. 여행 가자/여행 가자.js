const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = Number(input.shift());
const m = Number(input.shift());
const points = input
  .pop()
  .split(" ")
  .map((v) => v - 1);
const routes = input.map((str) => str.split(" ").map(Number));

const root = Array.from({ length: n }, (_, i) => i);

const find = (a) => {
  if (a === root[a]) return a;

  root[a] = find(root[a]);
  return root[a];
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

  if (rootA == rootB) return true;
  else return false;
};

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (routes[i][j] === 1) {
      // 길이 있다면
      const flag = isUnion(i, j);

      if (!flag) union(i, j);
    }
  }
}

let answer = true;
for (let i = 0; i < points.length - 1; i++) {
  const flag = isUnion(points[i], points[i + 1]);

  if (!flag) {
    answer = false;
    break;
  }
}

console.log(answer ? "YES" : "NO");
