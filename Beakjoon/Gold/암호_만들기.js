// 1759
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [L, C] = input[0].split(" ").map(Number);
const list = input[1].split(" ").sort();

const vowels = ["a", "e", "i", "o", "u"];

const arr = new Array(L).fill("");
let answer = "";

const backTracking = (at, count, vowelCount) => {
    if (count === L) {
        if (vowelCount >= 1 && L - vowelCount >= 2) {
            answer += `${arr.join("")}\n`;
        }
        return;
    }

    for (let i = at; i < C; i++) {
        arr[count] = list[i];
        if (vowels.includes(list[i])) {
            backTracking(i + 1, count + 1, vowelCount + 1);
        } else {
            backTracking(i + 1, count + 1, vowelCount);
        }
    }
};

backTracking(0, 0, 0);
console.log(answer);
