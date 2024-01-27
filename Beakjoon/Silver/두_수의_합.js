// 3273
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Silver/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = parseInt(input.shift(), 10);
const numbers = input.shift().split(" ").map(Number);
const X = parseInt(input.shift(), 10);

const list = new Array(Math.max(...numbers) + 1).fill(false);
let answer = 0;

numbers.forEach((num) => {
    if (!list[num]) list[num] = true;
    if (list[X - num] && num !== X - num) answer++;
});

console.log(answer);
