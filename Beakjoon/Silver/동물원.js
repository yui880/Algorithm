// 1309
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Silver/test.txt";
const input = fs.readFileSync(filePath).toString().trim();

const N = Number(input);
const dp = new Array(N + 2);

dp[1] = 3;
dp[2] = 7;

for (let i = 3; i <= N; i++) {
    dp[i] = (dp[i - 1] * 2 + dp[i - 2]) % 9901;
}

console.log(dp[N]);
