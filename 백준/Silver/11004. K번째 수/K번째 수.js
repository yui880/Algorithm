const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, k] = input[0].split(" ").map(Number);
const list = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

console.log(list[k - 1]);
