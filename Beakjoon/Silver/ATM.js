// 11399
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Silver/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input[0]);
const list = input[1]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);

let times = new Array(N);
times[0] = list[0];
let answer = list[0];

for (let i = 1; i < N; i++) {
    times[i] = list[i] + times[i - 1];
    answer += times[i];
}

console.log(answer);
