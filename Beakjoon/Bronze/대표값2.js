// 2587
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Bronze/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const list = input.map(Number);

console.log(list.reduce((sum, cur) => sum + cur) / 5);
console.log(list.sort((a, b) => a - b)[2]);
