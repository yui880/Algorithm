// 11726
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Silver/test.txt";
let input = fs.readFileSync(filePath).toString().trim();

const N = Number(input);

const dp = new Array(N);
dp[0] = 1;
dp[1] = 2;
for (let i = 2; i < N; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % 10007;
}

console.log(dp[N - 1]);
