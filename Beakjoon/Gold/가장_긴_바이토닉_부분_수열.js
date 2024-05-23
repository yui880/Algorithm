// 11054
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input.shift());
const list = input.shift().split(" ").map(Number);

const dp = Array.from({ length: N }, () => new Array(2).fill(0));

for (let i = 0; i < N; i++) {
    dp[i][0] = 1;
    dp[i][1] = 1;

    for (let j = 0; j < i; j++) {
        if (list[i] > list[j]) {
            dp[i][0] = Math.max(dp[i][0], dp[j][0] + 1);
        }
        if (list[i] < list[j]) {
            dp[i][1] = Math.max(dp[i][1], dp[j][0] + 1, dp[j][1] + 1);
        }
    }
}

console.log(Math.max(...dp.flat()));
