const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = parseInt(input);

function countDominoesInSet(n) {
  return ((n + 2) * (n + 1)) / 2;
}

console.log(countDominoesInSet(N) * N);
