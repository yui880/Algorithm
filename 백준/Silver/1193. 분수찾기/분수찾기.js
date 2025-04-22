const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const X = parseInt(input[0]);

let diagonal = 1;
let count = 1;

while (count < X) {
  diagonal++;
  count += diagonal;
}

const position = diagonal - (count - X);

let numerator, denominator;

if (diagonal % 2 === 0) {
  numerator = position;
  denominator = diagonal - position + 1;
} else {
  numerator = diagonal - position + 1;
  denominator = position;
}

console.log(`${numerator}/${denominator}`);
