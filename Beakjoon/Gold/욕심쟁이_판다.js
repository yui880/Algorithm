// 1937
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input.shift());
const board = input.map((str) => str.split(" ").map(Number));

// 먹고 상하좌우로 이동 / 옮긴 지역에 전 지역보다 대나무가 많이 있어야 함
// 최대한 많은 칸을 이동하려면 어떤 경로를 통해야 하는지

// dp[i][j] = i,j에서 시작해서 이동 가능한 최대값
// dp를 계속 사용해도 되는 이유 : 대나무가 많아지는 순서대로 이동해야 하기때문에 어차피 이전에 먹었을리가 없음

const dp = Array.from({ length: N }, () => new Array(N).fill(0));

const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

const dfs = (x, y) => {
    if (dp[x][y] !== 0) return dp[x][y];

    dp[x][y] = 1;
    let count = 0;

    for (let i = 0; i < 4; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];

        if (nx < 0 || nx >= N || ny < 0 || ny >= N) continue;
        if (board[x][y] < board[nx][ny]) {
            count = Math.max(count, dfs(nx, ny));
        }
    }

    return (dp[x][y] += count);
};

let answer = 0;

for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
        answer = Math.max(answer, dfs(i, j));
    }
}

console.log(answer);
