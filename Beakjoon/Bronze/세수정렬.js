// 2752
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Bronze/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

console.log(
    input
        .shift()
        .split(" ")
        .map(Number)
        .sort((a, b) => a - b)
        .join(" ")
);
