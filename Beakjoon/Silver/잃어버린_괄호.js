// 1541
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Silver/test.txt";
let input = fs.readFileSync(filePath).toString().trim();

const splitedMinus = input.split("-");
let answer = 0;
if (splitedMinus.length === 1) {
    answer = input
        .split("+")
        .map(Number)
        .reduce((a, c) => a + c);
} else {
    splitedMinus.forEach((exp, i) => {
        const numbers = exp.split("+").map(Number);
        if (i === 0) answer += numbers.reduce((a, n) => a + n);
        else answer -= numbers.reduce((a, n) => a + n);
    });
}

console.log(answer);
