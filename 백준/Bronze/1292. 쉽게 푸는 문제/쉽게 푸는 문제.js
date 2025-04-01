const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [a, b] = input[0].split(" ").map(Number);

const sum = [0];

for (let i = 1; i <= b; i++) {
  for (let j = 0; j < i; j++) {
    sum.push(i);
  }
}

for (let i = 1; i < sum.length; i++) {
  sum[i] += sum[i - 1];
}

console.log(sum[b] - sum[a - 1]);
