// 16234
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, L, R] = input.shift().split(" ");
const board = input.map((str) => str.split(" ").map(Number));

const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

const bfs = (a, b, visited) => {
    const queue = [];
    visited[a][b] = true;
    queue.push([a, b]);

    let flag = false;
    let total = 0;
    const temp = [[a, b]];

    let idx = 0;
    while (queue.length > idx) {
        const [x, y] = queue[idx++];
        total += board[x][y];

        for (let i = 0; i < 4; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];

            if (nx < 0 || nx >= N || ny < 0 || ny >= N) continue;
            if (!visited[nx][ny]) {
                const differ = Math.abs(board[x][y] - board[nx][ny]);
                if (differ >= L && differ <= R) {
                    temp.push([nx, ny]);
                    flag = true;
                    visited[nx][ny] = true;
                    queue.push([nx, ny]);
                }
            }
        }
    }

    if (!flag) return flag;

    const avg = Math.floor(total / temp.length);
    temp.forEach(([x, y]) => {
        board[x][y] = avg;
    });

    return flag;
};

let answer = 0;
while (true) {
    let totalFlag = false;
    const visited = Array.from({ length: N }, () => new Array(N).fill(false));

    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            if (!visited[i][j]) {
                const flag = bfs(i, j, visited);
                if (flag) totalFlag = true;
            }
        }
    }
    if (!totalFlag) break;
    answer += 1;
}

console.log(answer);
