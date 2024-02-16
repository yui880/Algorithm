//1932
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Silver/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = parseInt(input.shift());
const board = input.map((i) => i.split(" ").map(Number));

const dp = Array.from({ length: N }, () => new Array(N).fill(0));
dp[0][0] = board[0][0];

for (let i = 1; i < N; i++) {
    for (let j = 0; j < i + 1; j++) {
        if (j - 1 < 0) {
            dp[i][j] = dp[i - 1][j] + board[i][j];
        } else {
            dp[i][j] = Math.max(dp[i - 1][j - 1], dp[i - 1][j]) + board[i][j];
        }
    }
}

console.log(Math.max(...dp[N - 1]));
