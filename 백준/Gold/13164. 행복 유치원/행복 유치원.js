const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const list = input[1].split(" ").map(Number);

const range = [];

for (let i = 0; i < n - 1; i++) {
  range.push(list[i + 1] - list[i]);
}

range.sort((a, b) => a - b);

const total = range.slice(0, n - m).reduce((acc, cur) => acc + cur, 0);

console.log(total);
