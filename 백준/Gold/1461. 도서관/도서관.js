const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const list = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

const negative = list.filter((v) => v < 0);
const positive = list.filter((v) => v > 0);

let total = 0;
let i = 0;
while (i < negative.length) {
  total += negative[i] * -2;
  i += m;
}

let j = positive.length - 1;
while (j >= 0) {
  total += positive[j] * 2;
  j -= m;
}

const max = Math.max(-1 * negative[0] || 0, positive[positive.length - 1] || 0);
console.log(total - max);
