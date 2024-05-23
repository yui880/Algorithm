// 1633
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = 15;
const len = input.length;

const white = [];
const black = [];

input.forEach((str) => {
    const [w, b] = str.split(" ").map(Number);
    white.push(w);
    black.push(b);
});

// dp[i][j][k] = i번째 선수일 때 백돌 j개, 흑돌 k개를 선택했을 때의 합
const dp = Array.from({ length: len }, () => Array.from({ length: N + 1 }, () => new Array(N + 1).fill(0)));

const solution = (i, wCount, bCount) => {
    if (wCount === N && bCount === N) return 0;
    if (i === len) return 0;

    if (wCount <= 15 && bCount <= 15 && dp[i][wCount][bCount]) return dp[i][wCount][bCount];

    let sum = solution(i + 1, wCount, bCount);
    if (wCount < N) sum = Math.max(sum, solution(i + 1, wCount + 1, bCount) + white[i]);
    if (bCount < N) sum = Math.max(sum, solution(i + 1, wCount, bCount + 1) + black[i]);

    dp[i][wCount][bCount] = sum;
    return sum;
};

console.log(solution(0, 0, 0));
