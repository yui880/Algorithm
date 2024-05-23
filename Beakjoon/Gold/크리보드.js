// 11058
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input.shift());

const dp = Array(N + 1).fill(0);

for (let i = 1; i <= 6; i++) {
    dp[i] = i;
}

for (let i = 7; i <= N; i++) {
    dp[i] = Math.max(dp[i - 3] * 2, dp[i - 4] * 3, dp[i - 5] * 4);
}

console.log(dp[N]);
