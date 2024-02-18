// 2217
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Silver/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input.shift());
const rope = input.map(Number).sort((a, b) => b - a);

let answer = 0;
for (let i = 0; i < N; i++) {
    answer = Math.max(answer, rope[i] * (i + 1));
}

console.log(answer);
