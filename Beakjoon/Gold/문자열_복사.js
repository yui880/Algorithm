// 2195
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const s = input[0];
const p = input[1];

// 간단하게 풀기

let temp = "";
let answer = 1;

for (let i = 0; i < p.length; i++) {
    const next = temp + p[i];

    if (s.indexOf(next) !== -1) {
        temp = next;
    } else {
        temp = p[i];
        answer++;
    }
}

console.log(answer);

// dp 사용하기
const dp = Array(p.length + 1).fill(Infinity);
dp[0] = 0;

const possible = new Set();

for (let i = 0; i < p.length; i++) {
    for (let j = 0; j <= i; j++) {
        const remain = p.slice(i - j, i + 1);

        if (possible.has(remain) || s.indexOf(remain) !== -1) {
            dp[i + 1] = Math.min(dp[i + 1], dp[i - j] + 1);
            possible.add(remain);
        }
    }
}

console.log(dp[p.length]);
