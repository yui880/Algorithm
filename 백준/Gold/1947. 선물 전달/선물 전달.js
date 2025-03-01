const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = +input.shift();

const dp = Array(n + 1).fill(0);
dp[1] = 0;
dp[2] = 1;
dp[3] = 2;

for (let i = 4; i <= n; i++) {
  dp[i] = ((i - 1) * (dp[i - 1] + dp[i - 2])) % 1_000_000_000;
}

console.log(dp[n]);
