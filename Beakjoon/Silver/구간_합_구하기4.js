// 11659
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Silver/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const list = input.shift().split(" ").map(Number);
const intervals = input.map((str) => str.split(" ").map(Number));

const dp = new Array(N + 1).fill(0);
dp[1] = list[0];
for (let i = 2; i <= N; i++) {
    dp[i] = dp[i - 1] + list[i - 1];
}

let answer = "";
intervals.forEach(([i, j]) => {
    answer += `${dp[j] - dp[i - 1]}\n`;
});

console.log(answer);
