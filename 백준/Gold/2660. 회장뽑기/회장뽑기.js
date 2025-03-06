const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
input.pop();

const n = +input.shift();
const list = input.map((str) => str.split(" ").map(Number));
const d = Array.from({ length: n + 1 }, () => Array(n + 1).fill(Infinity));

for (const [s, e] of list) {
  d[s][e] = 1;
  d[e][s] = 1;
}

for (let i = 1; i <= n; i++) {
  d[i][i] = 0;
}

for (let k = 1; k <= n; k++) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      d[i][j] = Math.min(d[i][k] + d[k][j], d[i][j]);
    }
  }
}

let maxList = [];

for (let i = 1; i <= n; i++) {
  let max = 0;
  for (let j = 1; j <= n; j++) {
    max = Math.max(max, d[i][j]);
  }
  maxList.push(max);
}

const minVal = Math.min(...maxList);
const result = [];
maxList.forEach((item, index) => {
  if (item === minVal) result.push(index + 1);
});

console.log(minVal, result.length);
console.log(result.join(" "));
