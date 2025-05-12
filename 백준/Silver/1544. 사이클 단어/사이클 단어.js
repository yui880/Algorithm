const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = +input.shift();
const list = input;
const double = input.map((v) => v.repeat(2));

const same = new Set();

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (i === j) continue;

    if (double[i].includes(list[j]) && list[i].length === list[j].length) {
      same.add(Math.min(i, j));
    }
  }
}

console.log(n - same.size);
