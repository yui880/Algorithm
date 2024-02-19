// 2146
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input.shift());
const board = input.map((val) => val.split(" "));
const visited = Array.from({ length: N }, () => new Array(N).fill(false));

const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

const findEnd = (a, b) => {
    const queue = [];
    const end = new Set();
    queue.push([a, b]);
    visited[a][b] = true;

    let idx = 0;
    while (queue.length > idx) {
        const [x, y] = queue[idx++];

        for (let i = 0; i < 4; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];

            if (nx < 0 || nx >= N || ny < 0 || ny >= N) continue;
            if (!visited[nx][ny]) {
                if (board[nx][ny] === "1") {
                    visited[nx][ny] = true;
                    queue.push([nx, ny]);
                } else if (board[nx][ny] === "0") {
                    end.add([nx, ny]);
                }
            }
        }
    }
    return [...end];
};

const bfs = (queue) => {
    let idx = 0;
    while (queue.length > idx) {
        const [x, y, count] = queue[idx++];

        for (let i = 0; i < 4; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];

            if (nx < 0 || nx >= N || ny < 0 || ny >= N) continue;
            if (!visited[nx][ny]) {
                if (board[nx][ny] === "0") {
                    if (!visited[nx][ny] || visited[nx][ny] > count + 1) {
                        visited[nx][ny] = count + 1;
                        queue.push([nx, ny, count + 1]);
                    }
                }
            }
            if (!visited[nx][ny] && board[nx][ny] === "1") {
                return count;
            }
        }
    }
    return Infinity;
};

const getUniqueArray = (inputArray) => Array.from(new Set(inputArray.map(JSON.stringify)), JSON.parse);

const answer = [];
for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
        if (!visited[i][j] && board[i][j] === "1") {
            const temp = getUniqueArray(findEnd(i, j)).map((val) => [...val, 1]);
            answer.push(bfs(temp));
        }
    }
}

console.log(Math.min(...answer));
