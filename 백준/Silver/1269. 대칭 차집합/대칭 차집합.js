const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [A, B] = input[0].split(" ").map(Number);
const aList = input[1].split(" ").map(Number);
const bList = input[2].split(" ").map(Number);

const tempA = new Set(aList);
const tempB = new Set(bList);

bList.forEach((v) => {
  if (tempA.has(v)) {
    tempA.delete(v);
  }
});

aList.forEach((v) => {
  if (tempB.has(v)) {
    tempB.delete(v);
  }
});

console.log(tempA.size + tempB.size);
