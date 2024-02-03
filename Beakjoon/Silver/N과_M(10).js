// 15663
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Silver/test.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const numbers = input[1]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);

let arr = new Array(M).fill(0);
let isUsed = new Array(N).fill(false);
let answer = "";

const tracking = (at, count) => {
    if (count === M) {
        answer += `${arr.join(" ")}\n`;
        return;
    }

    let prev = 0;
    for (let i = at; i < N; i++) {
        if (!isUsed[i] && numbers[i] !== prev) {
            arr[count] = numbers[i];
            prev = numbers[i];

            isUsed[i] = true;
            tracking(i, count + 1);
            isUsed[i] = false;
        }
    }
};

tracking(0, 0);
console.log(answer);
