// 1652
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Silver/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input.shift());
let row = 0;
let col = 0;

for (let i = 0; i < N; i++) {
    row += input[i].split("X").filter((v) => v.includes("..")).length;

    let count = 0;
    for (let j = 0; j < N; j++) {
        if (input[j][i] === ".") count++;
        if (input[j][i] === "X" || j === N - 1) {
            if (count >= 2) col++;
            count = 0;
        }
    }
}

console.log(row, col);
