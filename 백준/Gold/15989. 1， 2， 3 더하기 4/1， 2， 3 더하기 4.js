const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = +input.shift();
const list = input.map(Number);
const max = Math.max(...list) + 1;

const dp = Array(max).fill(1);

for (let i = 2; i < max; i++) {
  dp[i] += dp[i - 2];
}

for (let i = 3; i < max; i++) {
  dp[i] += dp[i - 3];
}

console.log(list.map((v) => dp[v]).join("\n"));
