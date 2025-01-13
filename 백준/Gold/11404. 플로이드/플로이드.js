const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let idx = 0;
const n = Number(input[idx++]);
const m = Number(input[idx++]);
const routes = [];

while (idx < input.length) {
  routes.push(input[idx++].split(" ").map(Number));
}

const d = Array.from({ length: n }, () => Array(n).fill(Infinity));
for (const [s, e, w] of routes) {
  d[s - 1][e - 1] = Math.min(w, d[s - 1][e - 1]);
}

for (let i = 0; i < n; i++) {
  d[i][i] = 0;
}

for (let k = 0; k < n; k++) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      d[i][j] = Math.min(d[i][k] + d[k][j], d[i][j]);
    }
  }
}

console.log(d.map((str) => str.map((v) => (v === Infinity ? 0 : v)).join(" ")).join("\n"));
