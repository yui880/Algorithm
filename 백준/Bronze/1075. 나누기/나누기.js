const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const a = +input[0];
const b = +input[1];

const base = Math.floor(a / 100) * 100;

let answer = -1;

for (let i = 0; i < 100; i++) {
  const newNum = base + i;
  if (newNum % b === 0) {
    answer = i;
    break;
  }
}

console.log(answer.toString().padStart(2, "0"));
