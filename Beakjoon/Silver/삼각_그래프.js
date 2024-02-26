// 4883
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Silver/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const answer = [];

let idx = 0;
while (true) {
    const N = Number(input[idx]);
    if (N === 0) break;

    const list = [];
    for (let i = idx + 1; i <= idx + N; i++) {
        list.push(input[i].split(" ").map(Number));
    }
    idx += N + 1;

    const dp = Array.from({ length: N }, () => new Array(3));
    dp[0][0] = list[0][0];
    dp[0][1] = list[0][1];
    dp[0][2] = list[0][2] + list[0][1];

    dp[1][0] = list[0][1] + list[1][0];
    dp[1][1] = Math.min(dp[0][1], dp[0][2], dp[1][0]) + list[1][1];
    dp[1][2] = Math.min(dp[0][1], dp[0][2], dp[1][1]) + list[1][2];

    for (let i = 2; i < N; i++) {
        dp[i][0] = Math.min(dp[i - 1][0], dp[i - 1][1]) + list[i][0];
        dp[i][1] = Math.min(dp[i - 1][0], dp[i - 1][1], dp[i - 1][2], dp[i][0]) + list[i][1];
        dp[i][2] = Math.min(dp[i - 1][1], dp[i - 1][2], dp[i][1]) + list[i][2];
    }

    answer.push(dp[N - 1][1]);
}

console.log(answer.map((v, i) => `${i + 1}. ${v}`).join("\n"));
