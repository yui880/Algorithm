// 2294
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, K] = input.shift().split(" ").map(Number);
const coins = [...new Set(input.map(Number))];

const dp = Array.from({ length: N + 1 }, () => new Array(K + 1).fill(Infinity));

for (let j = 1; j <= K; j++) {
    if (j % coins[0] === 0) dp[1][j] = j / coins[0];
}

for (let i = 2; i <= N; i++) {
    const coin = coins[i - 1];

    for (let j = 1; j <= K; j++) {
        if (j === coin) {
            dp[i][j] = 1;
        } else if (j - coin >= 1 && j % coin === 0) {
            dp[i][j] = Math.min(dp[i][j - coin] + 1, dp[i - 1][j], j / coin);
        } else if (j - coin >= 1) {
            dp[i][j] = Math.min(dp[i][j - coin] + 1, dp[i - 1][j]);
        } else if (j % coin === 0) {
            dp[i][j] = Math.min(dp[i - 1][j], j / coin);
        } else {
            dp[i][j] = dp[i - 1][j];
        }
    }
}

if (dp[N][K] === Infinity) {
    console.log(-1);
} else {
    console.log(dp[N][K]);
}

// 2번째 풀이

const dp2 = Array(K + 1).fill(Infinity);
dp2[0] = 0;

for (let i = 0; i < N; i++) {
    const coin = coins[i];
    for (let j = 1; j <= K; j++) {
        if (j - coin >= 0) dp2[j] = Math.min(dp2[j - coin] + 1, dp2[j]);
    }
}

if (dp2[K] === Infinity) {
    console.log(-1);
} else {
    console.log(dp2[K]);
}
