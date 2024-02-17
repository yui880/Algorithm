// 9461
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Silver/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = input.shift();
const list = input.map(Number);
const max = Math.max(...list);

const dp = new Array(max + 1).fill(0);
dp[1] = 1;
dp[2] = 2;
dp[3] = 4;

for (let i = 4; i <= max; i++) {
    dp[i] = (dp[i - 3] + dp[i - 2] + dp[i - 1]) % 1_000_000_009;
}

list.forEach((num) => console.log(dp[num]));
