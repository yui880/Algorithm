// 9465
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Silver/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const T = Number(input.shift());

for (let i = 0; i < T; i++) {
    const N = Number(input.shift());

    const list = [];
    for (let i = 0; i < 2; i++) {
        list.push(input.shift().split(" ").map(Number));
    }

    if (N === 1) {
        console.log(Math.max(list[0][0], list[1][0]));
        continue;
    }

    const dp = Array.from({ length: N }, () => new Array(2));
    dp[0][0] = list[0][0];
    dp[1][0] = list[1][0];
    dp[0][1] = list[1][0] + list[0][1];
    dp[1][1] = list[0][0] + list[1][1];

    for (let i = 2; i < N; i++) {
        dp[0][i] = Math.max(dp[1][i - 1], dp[1][i - 2]) + list[0][i];
        dp[1][i] = Math.max(dp[0][i - 1], dp[0][i - 2]) + list[1][i];
    }

    console.log(Math.max(dp[0][N - 1], dp[1][N - 1]));
}
