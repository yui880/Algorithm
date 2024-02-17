//11727
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Silver/test.txt";
let input = fs.readFileSync(filePath).toString().trim();

const N = Number(input);
const dp = new Array(N + 1);
dp[1] = 1;
dp[2] = 3;

for (let i = 3; i <= N; i++) {
    dp[i] = (dp[i - 2] * 2 + dp[i - 1]) % 10007;
}

console.log(dp[N]);
