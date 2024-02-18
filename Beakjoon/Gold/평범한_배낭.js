// 12865
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, K] = input.shift().split(" ").map(Number);
const items = input.map((str) => str.split(" ").map(Number));

const dp = Array.from({ length: N + 1 }, () => Array(K + 1).fill(0));

for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= K; j++) {
        const [m, v] = items[i - 1];
        if (j < m) dp[i][j] = dp[i - 1][j];
        else dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - m] + v);
    }
}

console.log(dp[N][K]);
