const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = +input[0];
const list = input[1].split(" ").map(Number);

const sum = Array(n).fill(0);
sum[0] = list[0];
for (let i = 1; i < n; i++) {
  sum[i] = sum[i - 1] + list[i];
}

let answer = 0;
for (let i = 1; i < n - 1; i++) {
  const first = sum[n - 1] - list[0] + (sum[n - 1] - sum[i]) - list[i];
  const second = sum[i] - list[0] + (sum[n - 2] - sum[i - 1]);
  const third = sum[n - 2] + sum[i - 1] - list[i];

  answer = Math.max(answer, first, second, third);
}

console.log(answer);
