const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const list = input
  .map((v, i) => [Number(v), i])
  .sort((a, b) => b[0] - a[0])
  .slice(0, 5);
const sum = list.reduce((acc, cur) => acc + cur[0], 0);

console.log(sum);
console.log(
  list
    .map((v) => v[1] + 1)
    .sort((a, b) => a - b)
    .join(" ")
);
