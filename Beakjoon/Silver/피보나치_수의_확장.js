// 1788
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Silver/test.txt";
let input = fs.readFileSync(filePath).toString().trim();

const N = Number(input);
const n = Math.abs(N);

const dp = Array(n * 2 + 1).fill(0);

if (N >= 0) {
    dp[0] = 0;
    dp[1] = 1;
    for (let i = 2; i <= n; i++) {
        dp[i] = (dp[i - 1] + dp[i - 2]) % 1000000000;
    }
} else {
    dp[0] = 0;
    dp[1] = 1;
    for (let i = 2; i <= n; i++) {
        dp[i] = (dp[i - 2] - dp[i - 1]) % 1000000000;
    }
}

if (dp[n] > 0) console.log(1);
else if (dp[n] < 0) console.log(-1);
else console.log(0);

console.log(Math.abs(dp[n]));
