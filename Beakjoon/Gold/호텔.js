// 1106
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [C, N] = input.shift().split(" ").map(Number);
const list = input.map((str) => str.split(" ").map(Number));

const dp = new Array(C + 100).fill(Infinity);
dp[0] = 0;

for (let i = 0; i < N; i++) {
    const [val, count] = list[i];

    for (let j = count; j < C + 100; j++) {
        dp[j] = Math.min(dp[j], dp[j - count] + val);
    }
}

let answer = Math.min(...dp.slice(C));

console.log(answer);
