// 2565
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input.shift());
const list = input.map((str) => str.split(" ").map(Number)).sort((a, b) => a[0] - b[0]);
const lines = list.map(([_, val]) => val);

// 가장 긴 증가하는 부분 수열의 길이 구하기
// dp[i] = i를 마지막 값으로 가지는 증가 수열의 길이

const dp = Array(N).fill(0);

for (let i = 0; i < N; i++) {
    dp[i] = 1;
    for (let j = 0; j < i; j++) {
        if (lines[i] > lines[j]) {
            dp[i] = Math.max(dp[i], dp[j] + 1);
        }
    }
}

console.log(N - Math.max(...dp));
