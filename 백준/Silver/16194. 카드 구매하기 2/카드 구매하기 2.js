const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = +input[0];
const prices = [0, ...input[1].split(" ").map(Number)];

const dp = Array(n + 1).fill(Infinity);
dp[0] = 0;

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= Math.min(i, n); j++) {
    dp[i] = Math.min(dp[i], dp[i - j] + prices[j]);
  }
}

console.log(dp[n]);
