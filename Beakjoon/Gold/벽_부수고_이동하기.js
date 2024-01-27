//2206
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const board = [];

for (let i = 0; i < N; i++) {
    board.push(input[i].split(""));
}

const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

const bfs = (tempMap) => {
    if (N - 1 === 0 && M - 1 === 0) return 1;
    const visited = Array.from({ length: N }, () => Array.from({ length: M }, () => [false, false]));
    const queue = [];
    queue.push([0, 0, 1, 0]);
    visited[0][0][0] = true;

    let idx = 0;
    while (queue.length > idx) {
        const [x, y, t, isBroken] = queue[idx++];

        for (let i = 0; i < 4; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];

            if (nx < 0 || nx >= N || ny < 0 || ny >= M) continue;
            if (!visited[nx][ny][isBroken] && tempMap[nx][ny] === "0") {
                queue.push([nx, ny, t + 1, isBroken]);
                visited[nx][ny][isBroken] = true;
            }
            if (!isBroken && tempMap[nx][ny] === "1") {
                queue.push([nx, ny, t + 1, 1]);
                visited[nx][ny][1] = true;
            }
            if (nx === N - 1 && ny === M - 1) return t + 1;
        }
    }

    return -1;
};

console.log(bfs(board));
