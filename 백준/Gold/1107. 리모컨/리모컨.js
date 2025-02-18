const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const target = +input[0];
const m = +input[1];
let broken = [];

if (m !== 0) {
  broken = input[2].split(" ").map(Number);
}

const possible = Array(10).fill(true);
broken.forEach((v) => (possible[v] = false));

let answer = Math.abs(100 - target);

for (let i = 0; i <= 1000000; i++) {
  const str = i.toString();

  for (let j = 0; j < str.length; j++) {
    const num = +str[j];

    if (!possible[num]) break;
    if (possible[num] && j === str.length - 1) {
      answer = Math.min(answer, Math.abs(i - target) + str.length);
    }
  }
}

console.log(answer);
