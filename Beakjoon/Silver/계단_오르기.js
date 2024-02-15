// 2579
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Silver/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input.shift());
const stairs = input.map(Number);

const dp = Array.from({ length: 310 }, () => new Array(2));
dp[0][0] = stairs[0];
dp[0][1] = 0;
dp[1][0] = stairs[1];
dp[1][1] = stairs[0] + stairs[1];

for (let i = 2; i < N; i++) {
    dp[i][0] = Math.max(dp[i - 2][0], dp[i - 2][1]) + stairs[i];
    dp[i][1] = dp[i - 1][0] + stairs[i];
}

console.log(Math.max(dp[N - 1][0], dp[N - 1][1]));
