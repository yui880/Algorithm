// 9663
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim();

const N = Number(input);
let visited1 = new Array(N).fill(false);
let visited2 = new Array(2 * N).fill(false);
let visited3 = new Array(2 * N).fill(false);

let answer = 0;

const backTracking = (cur) => {
    // 행 선택 - x
    if (cur === N) {
        answer++;
        return;
    }

    for (let i = 0; i < N; i++) {
        // 열 선택 - y
        if (visited1[i] || visited2[i + cur] || visited3[cur - i + N - 1]) continue;
        visited1[i] = true;
        visited2[i + cur] = true;
        visited3[cur - i + N - 1] = true;
        backTracking(cur + 1);
        visited1[i] = false;
        visited2[i + cur] = false;
        visited3[cur - i + N - 1] = false;
    }
};

backTracking(0);
console.log(answer);
