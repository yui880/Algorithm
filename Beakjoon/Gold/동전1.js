// 2293
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, K] = input.shift().split(" ").map(Number);
const coins = input.map(Number);

// 1번 풀이 (2차원 dp)
const dp = Array.from({ length: N + 1 }, () => Array(K + 1).fill(0));

for (let i = 1; i <= N; i++) {
    const coin = coins[i - 1];
    for (let j = 1; j <= K; j++) {
        if (i === 1) {
            if (j % coin === 0) dp[i][j] += 1;
        } else {
            dp[i][j] += dp[i - 1][j];
            if (j - coin >= 0) {
                dp[i][j] += dp[i][j - coin] || 1;
            }
        }
    }
}

console.log(dp[N][K]);

// 2번 풀이 (1차원 dp)
const dp1 = Array(K + 1).fill(0);
dp1[0] = 1;

for (let i = 0; i < N; i++) {
    const coin = coins[i];
    for (let j = coin; j <= K; j++) {
        if (j - coin >= 0) dp1[j] += dp1[j - coin];
    }
}

console.log(dp1[K]);
