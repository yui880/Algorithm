// 2146
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input.shift());
const board = input.map((val) => val.split(" "));

let visited = Array.from({ length: N }, () => Array(N).fill(false));

const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

// 1. 섬의 말단 찾기
// 2. bfs 돌리기 (단, 접근하고자 하는 곳을 최단 거리로 갔을 때만 큐에 추가)

const findEnd = (a, b, num) => {
    const ends = new Set();
    const queue = [];
    queue.push([a, b]);
    visited[a][b] = true;
    board[a][b] = num;

    let idx = 0;
    while (queue.length > idx) {
        const [x, y] = queue[idx++];

        for (let i = 0; i < 4; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];

            if (nx < 0 || nx > N - 1 || ny < 0 || ny > N - 1) continue;
            if (board[nx][ny] === "0") {
                ends.add(JSON.stringify([x, y]));
                continue;
            }
            if (!visited[nx][ny]) {
                board[nx][ny] = num;
                visited[nx][ny] = true;
                queue.push([nx, ny]);
            }
        }
    }

    return ends;
};

const bfs = (list, num) => {
    const bridgeVisited = Array.from({ length: N }, () => Array(N).fill(Infinity));
    const queue = list.map((v) => {
        bridgeVisited[v[0]][v[1]] = 0;
        return [...v, 0];
    });

    let idx = 0;
    while (queue.length > idx) {
        const [x, y, count] = queue[idx++];

        for (let i = 0; i < 4; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];

            if (nx < 0 || nx > N - 1 || ny < 0 || ny > N - 1) continue;
            if (board[nx][ny] === "0" && bridgeVisited[nx][ny] > count + 1) {
                queue.push([nx, ny, count + 1]);
                bridgeVisited[nx][ny] = count + 1;
            }
            if (board[nx][ny] !== "0" && board[nx][ny] !== num) {
                return count;
            }
        }
    }
};

// const ends = [...findEnd(0, 0, 2)].map((v) => JSON.parse(v));
// const count = bfs(ends, 2);
// console.log(count);

let id = 2;
let answer = Infinity;
for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
        if (!visited[i][j] && board[i][j] === "1") {
            ends = [...findEnd(i, j, id)].map((v) => JSON.parse(v));
            const count = bfs(ends, id);
            id++;
            if (count < answer) answer = count;
        }
    }
}

console.log(answer);
