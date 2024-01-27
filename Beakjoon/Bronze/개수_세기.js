// 10807
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Bronze/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = parseInt(input.shift(), 10);
const numbers = input.shift().split(" ").map(Number);
const v = parseInt(input.shift(), 10);

console.log(numbers.filter((n) => n === v).length);
