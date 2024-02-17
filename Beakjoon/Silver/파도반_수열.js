// 9461
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Silver/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const T = Number(input.shift());
const list = input.map(Number);
const dp = new Array(100).fill(0);
dp[0] = 1;
dp[1] = 1;
dp[2] = 1;
dp[3] = 2;
dp[4] = 2;

const max = Math.max(...list);
for (let i = 5; i < max; i++) {
    dp[i] = dp[i - 5] + dp[i - 1];
}

list.forEach((n) => console.log(dp[n - 1]));
