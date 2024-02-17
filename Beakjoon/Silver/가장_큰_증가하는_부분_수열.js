// 11055
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Silver/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input[0]);
const list = input[1].split(" ").map(Number);

// dp[i] = list[i]를 마지막 값으로 가지는 가장 큰 증가부분수열의 길이
const dp = [...list];
for (let i = 1; i < N; i++) {
    for (let j = 0; j < i; j++) {
        if (list[i] > list[j]) {
            dp[i] = Math.max(dp[j] + list[i], dp[i]);
        }
    }
}
console.log(Math.max(...dp));
