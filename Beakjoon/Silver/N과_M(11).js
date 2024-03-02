// 15665
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Silver/test.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const numbers = input[1]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);

let arr = new Array(M).fill(0);
let answer = "";

const tracking = (count) => {
    if (count === M) {
        answer += `${arr.join(" ")}\n`;
        return;
    }

    let prev = 0;
    for (let i = 0; i < N; i++) {
        if (numbers[i] !== prev) {
            arr[count] = numbers[i];
            prev = numbers[i];

            tracking(count + 1);
        }
    }
};

tracking(0);
console.log(answer);
