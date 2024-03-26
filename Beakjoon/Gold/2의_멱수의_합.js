// 2410
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim();

const N = Number(input);

const dp = Array(N + 1).fill(0);
dp[1] = 1;

for (let i = 2; i <= N; i++) {
    if (i % 2 === 0) {
        dp[i] = (dp[i - 1] + dp[i / 2]) % 1_000_000_000;
    } else {
        dp[i] = dp[i - 1];
    }
}

console.log(dp[N]);
