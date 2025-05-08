const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = input[0];

const bin = BigInt("0b" + n);
console.log((bin * 17n).toString(2));