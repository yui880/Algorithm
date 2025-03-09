const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, t] = input.shift().split(" ").map(Number);
const list = input.map((str) => str.split(" ").map(Number));

const dp = Array.from({ length: n + 1 }, () => Array(t + 1).fill(0));

for (let i = 1; i <= n; i++) {
  const [time, score] = list[i - 1];

  for (let j = 1; j <= t; j++) {
    if (j - time < 0) dp[i][j] = dp[i - 1][j];
    else dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - time] + score);
  }
}

console.log(dp[n][t]);
