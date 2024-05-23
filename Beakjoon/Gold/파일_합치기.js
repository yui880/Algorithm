// 11054
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let idx = 0;

const T = Number(input[idx++]);
for (let i = 0; i < T; i++) {
    const N = Number(input[idx++]);
    const list = input[idx++].split(" ").map(Number);

    const dp = Array.from({ length: N + 1 }, () => new Array(N + 1).fill(Infinity));
    const sum = Array(N + 1).fill(0);

    for (let j = 1; j <= N; j++) {
        sum[j] = sum[j - 1] + list[j - 1];
        dp[j][j] = 0;
    }

    for (let count = 1; count < N; count++) {
        for (let start = 1; start <= N - count; start++) {
            const end = start + count;

            for (let mid = start; mid < end; mid++) {
                const rangeSum = sum[end] - sum[start - 1];
                dp[start][end] = Math.min(dp[start][end], dp[start][mid] + dp[mid + 1][end] + rangeSum);
            }
        }
    }

    console.log(dp[1][N]);
}
