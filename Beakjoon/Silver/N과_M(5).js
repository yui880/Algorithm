// 15654
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Silver/test.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const numbers = input[1]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);

let arr = new Array(M).fill(0);
let isUsed = new Array(10001).fill(false);
let answer = "";

const tracking = (count) => {
    if (count === M) {
        answer += `${arr.join(" ")}\n`;
        return;
    }

    for (let i = 0; i < N; i++) {
        if (!isUsed[numbers[i]]) {
            arr[count] = numbers[i];
            isUsed[numbers[i]] = true;
            tracking(count + 1);
            isUsed[numbers[i]] = false;
        }
    }
};

tracking(0);
console.log(answer);
