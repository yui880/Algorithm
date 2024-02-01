// 15652
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Silver/test.txt";
const input = fs.readFileSync(filePath).toString().trim();

const [N, M] = input.split(" ").map(Number);
const arr = new Array(M);
let answer = "";

const backTracking = (at, depth) => {
    if (depth === M) {
        answer += `${arr.join(" ")}\n`;
        return;
    }

    for (let i = at; i <= N; i++) {
        arr[depth] = i;
        backTracking(i, depth + 1);
    }
};

backTracking(1, 0);
console.log(answer);
