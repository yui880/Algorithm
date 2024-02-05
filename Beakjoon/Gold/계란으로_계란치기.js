// 16987
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input.shift());
let s = [];
let w = [];

input.forEach((str) => {
    const [a, b] = str.split(" ").map(Number);
    s.push(a);
    w.push(b);
});

let answer = 0;

const backTracking = (at) => {
    if (at === N) {
        const temp = s.filter((val) => val <= 0).length;
        if (temp > answer) answer = temp;
        return;
    }

    let flag = false;
    for (let i = 0; i < N; i++) {
        if (at === i || s[i] <= 0 || s[at] <= 0) continue;

        s[at] -= w[i];
        s[i] -= w[at];

        flag = true;
        backTracking(at + 1);
        s[at] += w[i];
        s[i] += w[at];
    }
    if (!flag) backTracking(at + 1);
};

backTracking(0);
console.log(answer);
