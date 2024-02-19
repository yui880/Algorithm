// 2847
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Silver/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input.shift());
let list = input.map(Number);

let answer = 0;
for (let i = N - 2; i >= 0; i--) {
    while (list[i + 1] <= list[i]) {
        answer++;
        list[i]--;
    }
}

console.log(answer);
