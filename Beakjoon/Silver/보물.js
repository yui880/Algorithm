// 1026
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Silver/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input[0]);
const a = input[1]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);
const b = input[2]
    .split(" ")
    .map(Number)
    .sort((a, b) => b - a);

let answer = 0;
for (let i = 0; i < N; i++) {
    answer += a[i] * b[i];
}

console.log(answer);
