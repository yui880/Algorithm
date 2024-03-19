// 2666
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input.shift());
const [f, s] = input.shift().split(" ").map(Number);
const M = Number(input.shift());
const list = input.map(Number);

const dp = Array.from({ length: M + 1 }, () => Array.from({ length: N + 1 }, () => new Array(N + 1).fill(-1)));

const solve = (index, first, second) => {
    if (index >= M) return 0;
    if (dp[index][first][second] !== -1) {
        return dp[index][first][second];
    }

    const next = list[index];
    const firstMove = Math.abs(first - next) + solve(index + 1, next, second);
    const secondMove = Math.abs(second - next) + solve(index + 1, first, next);

    dp[index][first][second] = Math.min(firstMove, secondMove);

    return dp[index][first][second];
};

console.log(solve(0, f, s));
