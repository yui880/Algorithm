const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = Number(input.shift());
const list = input.map(Number);

const dp = Array(n).fill(1);

for (let i = 0; i < n; i++) {
  for (let j = 0; j < i; j++) {
    if (list[j] > list[i]) continue;
    dp[i] = Math.max(dp[j] + 1, dp[i]);
  }
}

console.log(n - Math.max(...dp));
