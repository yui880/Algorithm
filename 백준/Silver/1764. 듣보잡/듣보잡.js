const fs = require("fs");
const { channel } = require("process");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m] = input.shift().split(" ").map(Number);
const check = new Set();

const answer = [];

for (const cur of input) {
  if (check.has(cur)) answer.push(cur);
  else {
    check.add(cur);
  }
}

console.log(answer.length);
console.log(answer.sort().join("\n"));
