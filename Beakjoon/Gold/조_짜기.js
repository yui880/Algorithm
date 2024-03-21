// 2229
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input.shift());
const list = input.shift().split(" ").map(Number);
list.unshift(0);

const dp = Array(N + 1).fill(0);

for (let i = 2; i <= N; i++) {
    let max = -1;
    let min = Infinity;
    for (let j = i; j >= 1; j--) {
        max = Math.max(max, list[j]);
        min = Math.min(min, list[j]);

        dp[i] = Math.max(dp[i], dp[j - 1] + max - min);
    }
}

console.log(dp[N]);
