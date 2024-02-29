// 1744
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input.shift());
const list = input.map(Number).sort((a, b) => a - b);

const solution = () => {
    if (N === 1) {
        console.log(list[0]);
        return;
    }

    let sum = 0;
    for (let i = 0; i < N; i += 2) {
        const first = list[i];
        const second = list[i + 1];

        if (first > 0) break;
        if (second === undefined) {
            sum += first;
            break;
        }
        if (first < 0 && second > 0) {
            sum += first;
            break;
        }

        sum += first * second;
    }

    for (let i = N - 1; i >= 0; i -= 2) {
        const first = list[i];
        const second = list[i - 1];

        if (first <= 0) break;
        if (second === undefined) {
            sum += first;
            break;
        }
        if (first > 0 && second <= 0) {
            sum += first;
            break;
        }

        if (first !== 1 && second !== 1) {
            sum += first * second;
        } else {
            sum += first + second;
        }
    }

    console.log(sum);
};

solution();
