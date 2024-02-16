// 1149
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Silver/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input.shift());
const list = input.map((str) => str.split(" ").map(Number));

const dp = Array.from({ length: N }, () => new Array(3));
dp[0][0] = list[0][0];
dp[0][1] = list[0][1];
dp[0][2] = list[0][2];

for (let i = 1; i < N; i++) {
    dp[i][0] = Math.min(dp[i - 1][1], dp[i - 1][2]) + list[i][0];
    dp[i][1] = Math.min(dp[i - 1][0], dp[i - 1][2]) + list[i][1];
    dp[i][2] = Math.min(dp[i - 1][0], dp[i - 1][1]) + list[i][2];
}

console.log(Math.min(...dp[N - 1]));
