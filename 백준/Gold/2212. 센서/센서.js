const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = Number(input[0]);
let k = Number(input[1]);
const list = input[2]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

const range = [];
for (let i = 1; i < n; i++) {
  range.push(Math.abs(list[i] - list[i - 1]));
}

range.sort((a, b) => b - a);

const answer = range.slice(k - 1).reduce((acc, cur) => acc + cur, 0);

console.log(answer);
