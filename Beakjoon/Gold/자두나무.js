// 2240
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [T, W] = input.shift().split(" ").map(Number);
const pos = input.map(Number);

const dp = Array.from({ length: T + 1 }, () => new Array(W + 1).fill(0));

if (pos[0] === 1) {
    dp[1][0] = 1;
    dp[1][1] = 0;
} else {
    dp[1][0] = 0;
    dp[1][1] = 1;
}

for (let i = 2; i <= T; i++) {
    for (let j = 0; j <= W; j++) {
        let isCorrectPosition = 0;

        if (j % 2 === 0 && pos[i - 1] === 1) {
            isCorrectPosition = 1;
        }
        if (j % 2 === 1 && pos[i - 1] === 2) {
            isCorrectPosition = 1;
        }

        if (j === 0) dp[i][j] = dp[i - 1][j] + isCorrectPosition;
        else dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - 1]) + isCorrectPosition;
    }
}

console.log(Math.max(...dp[T]));
