// 1912
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Silver/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input[0]);
const list = input[1].split(" ").map(Number);

const dp = new Array(N);
let answer = list[0];
dp[0] = list[0];

for (let i = 1; i < N; i++) {
    dp[i] = Math.max(dp[i - 1] + list[i], list[i]);
    if (answer < dp[i]) answer = dp[i];
}

console.log(answer);
