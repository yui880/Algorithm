const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const list = input[1].split(" ").map(Number);

for (let i = 1; i < list.length; i++) {
  list[i] += list[i - 1];
}

const remainder = Array(m).fill(0);
list.forEach((v) => {
  remainder[v % m]++;
});

let answer = remainder[0];
for (let i = 0; i < remainder.length; i++) {
  answer += (remainder[i] * (remainder[i] - 1)) / 2;
}

console.log(answer);
