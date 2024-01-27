// 2587
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Bronze/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const list = input.map(Number).sort((a, b) => a - b);
const sum = list.reduce((sum, cur) => sum + cur);
let answer = [];
let flag = false;

for (let i = 0; i < 8; i++) {
    for (let j = 1; j < 9; j++) {
        const temp = sum - list[i] - list[j];
        if (temp === 100) {
            answer = list.filter((n, idx) => idx !== i && idx !== j);
            flag = true;
            break;
        }
    }
    if (flag) break;
}

answer.forEach((n) => console.log(n));
