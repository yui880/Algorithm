// 2133
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim();

const N = Number(input);
const dp = Array(N + 1).fill(0);
const temp = Array(N + 1).fill(0);

dp[0] = 1;
dp[2] = 3;

for (let i = 3; i <= N; i++) {
    if (i % 2 !== 0) continue;
    dp[i] += dp[i - 2] * 3;
    for (let j = i - 4; j >= 0; j -= 2) {
        dp[i] += dp[j] * 2;
    }
}

console.log(dp[N]);
