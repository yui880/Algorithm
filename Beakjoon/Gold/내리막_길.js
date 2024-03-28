// 1520
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [M, N] = input.shift().split(" ").map(Number);
const board = input.map((str) => str.split(" ").map(Number));

const dx = [1, -1, 0, 0];
const dy = [0, 0, -1, 1];

const dp = Array.from({ length: M }, () => new Array(N).fill(-1));

const dfs = (x, y) => {
    if (x === M - 1 && y === N - 1) return 1;
    if (dp[x][y] !== -1) return dp[x][y];

    dp[x][y] = 0;
    for (let i = 0; i < 4; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];

        if (nx < 0 || nx >= M || ny < 0 || ny >= N) continue;
        if (board[nx][ny] < board[x][y]) {
            dp[x][y] += dfs(nx, ny);
        }
    }

    return dp[x][y];
};

console.log(dfs(0, 0));
