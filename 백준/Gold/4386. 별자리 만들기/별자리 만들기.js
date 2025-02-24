const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = +input.shift();
const points = input.map((str) => str.split(" ").map(Number));

const line = [];

for (let i = 0; i < points.length; i++) {
  for (let j = 0; j < points.length; j++) {
    if (i === j) continue;
    const [x1, y1] = points[i];
    const [x2, y2] = points[j];

    const d = Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
    line.push([i, j, d]);
  }
}

line.sort((a, b) => a[2] - b[2]);

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
  else root[rootA] = rootB;
};

const isUnion = (a, b) => {
  const rootA = find(a);
  const rootB = find(b);

  if (rootA === rootB) return true;
  else return false;
};

let answer = 0;

for (const [s, e, d] of line) {
  if (!isUnion(s, e)) {
    union(s, e);
    answer += d;
  }
}

console.log(answer.toFixed(2));
