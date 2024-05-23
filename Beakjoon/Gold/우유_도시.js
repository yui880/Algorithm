// 1633
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input.shift());
const board = input.map((str) => str.split(" ").map(Number));

const dx = [1, 0];
const dy = [0, 1];

const dp = Array.from({ length: N }, () => Array.from({ length: N }, () => new Array(3).fill(-1)));

const dfs = (x, y, before) => {
    if (x === N - 1 && y === N - 1) {
        return board[x][y] === (before + 1) % 3 ? 1 : 0;
    }

    if (dp[x][y][before] !== -1) return dp[x][y][before];

    let sum = 0;

    for (let i = 0; i < 2; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];

        if (nx < 0 || nx >= N || ny < 0 || ny >= N) continue;

        const target = board[nx][ny];
        if (target === (before + 1) % 3) {
            sum = Math.max(sum, dfs(nx, ny, target) + 1, dfs(nx, ny, before));
        } else {
            sum = Math.max(sum, dfs(nx, ny, before));
        }
    }

    dp[x][y][before] = sum;
    return sum;
};

let answer = 0;

for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
        if (board[i][j] === 0) {
            answer = Math.max(answer, dfs(i, j, board[i][j]) + 1);
        }
    }
}

console.log(answer);
