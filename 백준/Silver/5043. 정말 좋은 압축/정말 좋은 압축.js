const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, b] = input[0].split(" ").map(BigInt);

let maxFiles = BigInt(2) ** (b + 1n) - 1n;

if (N <= maxFiles) {
  console.log("yes");
} else {
  console.log("no");
}
