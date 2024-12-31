const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m] = input.shift().split(" ").map(Number);
const list = input.map((str) => str.split(" ").map(Number));

const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

for (let i = 1; i <= m; i++) {
  const [day, chapter] = list[i - 1];
  for (let j = 1; j <= n; j++) {
    dp[i][j] = dp[i - 1][j];
    if (j - day >= 0) dp[i][j] = Math.max(dp[i][j], dp[i - 1][j - day] + chapter);
  }
}

console.log(dp[m][n]);