// 11967
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const buttons = input.map((str) => str.split(" ").map(Number));

const board = Array.from({ length: N + 1 }, () => Array.from({ length: N + 1 }, () => [false, 0]));
let visited = Array.from({ length: N + 1 }, () => Array(N + 1).fill(false));
const possible = Array.from({ length: N + 1 }, () => Array(N + 1).fill(false));

buttons.forEach(([x1, y1, x2, y2]) => {
    if (board[x1][y1][1] === 0) board[x1][y1][1] = [[x2, y2]];
    else board[x1][y1][1].push([x2, y2]);
});

const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

let count = 1;

const init = () => {
    for (let i = 1; i <= N; i++) {
        for (let j = 1; j <= N; j++) {
            visited[i][j] = false;
        }
    }
};

const bfs = (a, b) => {
    let flag = false;

    const queue = [];
    queue.push([a, b]);
    visited[a][b] = true;
    board[a][b][0] = true;

    let idx = 0;
    while (queue.length > idx) {
        const [x, y] = queue[idx++];

        if (board[x][y][1] !== 0) {
            board[x][y][1].forEach(([tx, ty]) => {
                if (!board[tx][ty][0]) {
                    board[tx][ty][0] = true;
                    flag = true;
                    count++;
                }
            });
            board[x][y][1] = 0;
        }

        for (let i = 0; i < 4; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];

            if (nx >= 1 && nx <= N && ny >= 1 && ny <= N) {
                if (board[nx][ny][0] === true && !visited[nx][ny]) {
                    visited[nx][ny] = true;
                    queue.push([nx, ny]);
                }
            }
        }
    }

    return flag;
};

while (true) {
    const flag = bfs(1, 1);
    init();
    if (!flag) break;
}

console.log(count);
