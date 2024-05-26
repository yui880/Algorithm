// 17485
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const board = input.map((str) => str.split(" ").map(Number));

const dp = Array.from({ length: N }, () => Array.from({ length: M }, () => new Array(3).fill(Infinity)));

for (let i = 0; i < M; i++) {
    for (let j = 0; j < 3; j++) {
        dp[0][i][j] = board[0][i];
    }
}

for (let i = 1; i < N; i++) {
    for (let j = 0; j < M; j++) {
        if (j - 1 >= 0) {
            dp[i][j][0] = Math.min(dp[i - 1][j - 1][1], dp[i - 1][j - 1][2]) + board[i][j];
        }
        dp[i][j][1] = Math.min(dp[i - 1][j][0], dp[i - 1][j][2]) + board[i][j];
        if (j + 1 < M) {
            dp[i][j][2] = Math.min(dp[i - 1][j + 1][0], dp[i - 1][j + 1][1]) + board[i][j];
        }
    }
}

console.log(Math.min(...dp[N - 1].flat()));
