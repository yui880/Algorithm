// 10815
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Silver/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input.shift());
const visited = Array(N + 1).fill(false);

input
    .shift()
    .split(" ")
    .map((v) => (visited[v] = true));
const M = Number(input.shift());
const check = input.shift().split(" ").map(Number);

const answer = [];

check.forEach((val) => {
    visited[val] ? answer.push(1) : answer.push(0);
});

console.log(answer.join(" "));
