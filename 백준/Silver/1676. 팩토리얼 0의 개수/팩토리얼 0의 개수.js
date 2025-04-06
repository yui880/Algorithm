const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = parseInt(input[0]);

function countTrailingZeros(n) {
  let count = 0;

  let i = 5;
  while (Math.floor(n / i) > 0) {
    count += Math.floor(n / i);
    i *= 5;
  }

  return count;
}

console.log(countTrailingZeros(N));
