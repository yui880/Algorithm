const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = +input.shift();
const k = +input.shift();

const dp = Array.from({ length: n + 1 }, () => Array(k + 1).fill(0));

for (let i = 1; i <= n; i++) {
  dp[i][0] = 1;
  dp[i][1] = i;
}

for (let i = 3; i <= n; i++) {
  for (let j = 2; j <= (i + 1) / 2; j++) {
    dp[i][j] = (dp[i - 1][j] + dp[i - 2][j - 1]) % 1_000_000_003;
  }
}

console.log((dp[n - 3][k - 1] + dp[n - 1][k]) % 1_000_000_003);
