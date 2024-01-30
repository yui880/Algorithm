// 2630
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Silver/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = parseInt(input.shift(), 10);
const paper = input.map((row) => row.split(" ").map(Number));
const answer = [0, 0];

const recursion = (x, y, size) => {
    let flag = true;
    const target = paper[x][y];

    for (let i = x; i < x + size; i++) {
        for (let j = y; j < y + size; j++) {
            if (paper[i][j] !== target) {
                flag = false;
                break;
            }
            if (!flag) break;
        }
    }

    if (flag) {
        answer[target]++;
    } else {
        const newSize = size / 2;
        recursion(x, y, newSize);
        recursion(x + newSize, y, newSize);
        recursion(x, y + newSize, newSize);
        recursion(x + newSize, y + newSize, newSize);
    }
};

recursion(0, 0, N);
console.log(answer.join("\n"));
