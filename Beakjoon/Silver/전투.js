// 1303
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Silver/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [M, N] = input.shift().split(" ").map(Number);
const board = input.map((str) => str.split(""));

const visited = Array.from({ length: N }, () => new Array(M).fill(false));

const dx = [0, 0, 1, -1];
const dy = [1, -1, 0, 0];

const bfs = (a, b, style) => {
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

            if (nx >= N || nx < 0 || ny >= M || ny < 0) continue;
            if (!visited[nx][ny] && board[nx][ny] === style) {
                visited[nx][ny] = true;
                count++;
                queue.push([nx, ny]);
            }
        }
    }

    return count;
};

let w = 0;
let b = 0;

for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
        if (!visited[i][j]) {
            const temp = bfs(i, j, board[i][j]);
            if (board[i][j] === "W") w += temp ** 2;
            else b += temp ** 2;
        }
    }
}

console.log(w, b);
