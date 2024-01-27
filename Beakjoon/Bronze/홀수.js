// 2576
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Bronze/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const list = input.map(Number);
const odd = list.filter((n) => n % 2 === 1);

if (odd.length) {
    const sum = odd.reduce((sum, cur) => sum + cur);

    console.log(sum);
    console.log(Math.min(...odd));
} else {
    console.log(-1);
}
