// 2624
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input.shift());
const M = Number(input.shift());
const coins = input.map((str) => str.split(" ").map(Number));

// dp[i][j] = 동전 i번까지 사용해서 만들 수 있는 j값의 개수

const dp = Array.from({ length: M }, () => new Array(N + 1).fill(0));

for (let i = 0; i < M; i++) {
    const [price, count] = coins[i];
    for (let j = 1; j <= count; j++) {
        dp[i][j * price] += 1;
    }

    for (let k = 1; k <= N; k++) {
        for (let j = 1; j <= count; j++) {
            if (k - j * price >= 0 && i - 1 >= 0) dp[i][k] += dp[i - 1][k - j * price];
        }

        if (i - 1 >= 0) dp[i][k] += dp[i - 1][k];
    }
}

console.log(dp[M - 1][N]);
