// 16920
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const board = input.map((str) => str.split(""));
const N = 12;
const M = 6;
const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

const bfs = (a, b, symbol, visited) => {
    let count = 1;
    const queue = [];
    queue.push([a, b]);
    visited[a][b] = true;

    let idx = 0;
    while (queue.length > idx) {
        const [x, y] = queue[idx++];

        for (let i = 0; i < 4; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];

            if (nx < 0 || nx >= N || ny < 0 || ny >= M) continue;
            if (!visited[nx][ny] && board[nx][ny] === symbol) {
                visited[nx][ny] = true;
                queue.push([nx, ny]);
                count++;
            }
        }
    }

    if (count >= 4) {
        queue.forEach(([x, y]) => (board[x][y] = "."));
        return true;
    }

    return false;
};

const moveDown = () => {
    for (let i = N - 1; i > 0; i--) {
        for (let j = 0; j < M; j++) {
            for (let k = i - 1; k >= 0; k--) {
                if (board[k][j] !== "." && board[i][j] === ".") {
                    board[i][j] = board[k][j];
                    board[k][j] = ".";
                    break;
                }
            }
        }
    }
};

let count = 0;
let k = 4;
while (true) {
    const visited = Array.from({ length: N }, () => new Array(M));
    let flag = false;
    for (let i = N - 1; i >= 0; i--) {
        for (let j = 0; j < M; j++) {
            if (!visited[i][j] && board[i][j] !== ".") {
                const isDeleted = bfs(i, j, board[i][j], visited);
                if (isDeleted) flag = true;
            }
        }
    }

    moveDown();

    if (!flag) break;
    else count++;
}

console.log(count);
