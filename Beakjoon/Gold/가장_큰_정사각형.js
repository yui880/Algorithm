// 1915
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const board = input.map((str) => str.split("").map(Number));

let answer = 0;
const dp = Array.from({ length: N }, () => new Array(M).fill(0));

const solution = () => {
    if (N === 1 || M === 1) {
        if (board.flat(2).includes(1)) answer = 1;
        else answer = 0;

        return;
    }

    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            if (i === 0 || j === 0) {
                dp[i][j] = board[i][j];
                answer = Math.max(answer, dp[i][j]);
                continue;
            }

            if (board[i][j] === 0) continue;

            const up = dp[i - 1][j];
            const left = dp[i][j - 1];
            const cross = dp[i - 1][j - 1];

            dp[i][j] = Math.min(up, left, cross) + 1;
            answer = Math.max(dp[i][j], answer);
        }
    }
};

solution();

console.log(answer * answer);
