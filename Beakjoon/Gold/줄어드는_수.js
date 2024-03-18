// 1174
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim();

const N = Number(input);

let list = new Set([]);

const backTracking = (num, count) => {
    if (count === 10) {
        if (!list.has(num)) list.add(num);
        return;
    }

    backTracking(num, count + 1);
    backTracking(num * 10 + 9 - count, count + 1);
};

backTracking(0, 0);

const sorted = [...list].sort((a, b) => a - b);

if (N <= list.size) {
    console.log(sorted[N - 1]);
} else {
    console.log(-1);
}
