const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m] = input.shift().split(" ").map(Number);
const list = input.map((v) => v.split(" ").map(Number));
const total = list.flat(2).sort((a, b) => a - b);

console.log(total.join(" "));
