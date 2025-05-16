const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = +input.shift();
const list = input
  .shift()
  .split(" ")
  .map((v) => +v);

const answer = [...new Set(list)].sort((a, b) => a - b);

console.log(answer.join(" "));
