const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [v, e] = input.shift().split(" ").map(Number);
const list = input.map((str) => str.split(" ").map(Number));

const dp = Array.from({ length: v + 1 }, () => Array(v + 1).fill(Infinity));

for (const [s, e, w] of list) {
  dp[s][e] = Math.min(w, dp[s][e]);
}

for (let i = 0; i <= v; i++) {
  dp[i][i] = 0;
}

for (let k = 1; k <= v; k++) {
  for (let i = 1; i <= v; i++) {
    for (let j = 1; j <= v; j++) {
      dp[i][j] = Math.min(dp[i][k] + dp[k][j], dp[i][j]);
    }
  }
}

let answer = Infinity;

for (let i = 1; i <= v; i++) {
  for (let j = 1; j <= v; j++) {
    if (i === j) continue;
    answer = Math.min(dp[i][j] + dp[j][i], answer);
  }
}

console.log(answer === Infinity ? -1 : answer);
