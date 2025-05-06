const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = Number(input.shift());
const map = input.shift();

let result = 0;

for (let i = 0; i < n - 1; i++) {
  if (map[i] === "E" && map[i + 1] === "W") {
    result++;
  }
}

console.log(result);
