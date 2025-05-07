const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, l] = input[0].split(" ").map(Number);
const list = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

let cur = l;

for (let i = 0; i < list.length; i++) {
  if (list[i] <= cur) {
    cur++;
  }
}

console.log(cur);
