// 1992
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Silver/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input.shift());
const video = input.map((row) => row.split("").map(Number));
let answer = "";

const recursion = (x, y, size) => {
    const target = video[x][y];
    let flag = true;
    for (let i = x; i < x + size; i++) {
        for (let j = y; j < y + size; j++) {
            if (video[i][j] !== target) {
                flag = false;
                break;
            }
        }
        if (!flag) break;
    }

    if (flag) {
        answer += String(target);
    } else {
        const newSize = size / 2;

        answer += "(";
        recursion(x, y, newSize);
        recursion(x, y + newSize, newSize);
        recursion(x + newSize, y, newSize);
        recursion(x + newSize, y + newSize, newSize);
        answer += ")";
    }
};

recursion(0, 0, N);
console.log(answer);
