// 5582
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const first = input[0];
const second = input[1];

const dp = Array.from({ length: first.length + 1 }, () => new Array(second.length + 1).fill(0));
let max = 0;

for (let i = 1; i <= first.length; i++) {
    for (let j = 1; j <= second.length; j++) {
        if (first[i - 1] === second[j - 1]) {
            dp[i][j] = dp[i - 1][j - 1] + 1;
        }
        if (dp[i][j] > max) max = dp[i][j];
    }
}

console.log(max);
