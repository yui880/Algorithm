// 11052
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Silver/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input[0]);
const list = input[1].split(" ").map(Number);

const dp = [0, ...list];

for (let i = 1; i <= N; i++) {
    if (i > 1) {
        for (let j = 1; j < i; j++) {
            dp[i] = Math.max(dp[i - j] + dp[j], dp[i]);
        }
    }
}

console.log(dp[N]);
