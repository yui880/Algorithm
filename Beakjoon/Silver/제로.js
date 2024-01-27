// 10773
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Silver/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);

const N = input.shift();

const list = [];
input.forEach((num) => {
    if (num === 0) list.pop();
    else list.push(num);
});

console.log(list.reduce((sum, cur) => sum + cur, 0));
