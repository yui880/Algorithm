// 14852
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim();

const N = Number(input);
const dp = Array(N + 1).fill(0);
const memo = [2, 6, 20];

dp[1] = 2;
dp[2] = 7;

for (let i = 3; i <= N; i++) {
    dp[i] = dp[i - 1] * 2 + dp[i - 2] * 3 + memo[i - 3];
    dp[i] %= 1_000_000_007;
    memo[i] = (memo[i - 1] + dp[i] * 2) % 1_000_000_007;
}

console.log(dp[N]);
