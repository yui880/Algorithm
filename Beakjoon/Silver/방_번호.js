// 1475
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Silver/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const list = new Array(9).fill(0);
const numbers = [...input.shift()].map(Number);

numbers.forEach((n) => {
    if (n === 9) list[6] += 1;
    else list[n] += 1;
});

list[6] = Math.ceil(list[6] / 2);
console.log(Math.max(...list));
