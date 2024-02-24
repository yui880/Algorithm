// 3190
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input[0]);
const K = Number(input[1]);

const apples = [];
for (let i = 2; i < 2 + K; i++) {
    apples.push(input[i].split(" ").map(Number));
}
const L = Number(input[2 + K]);

const rotates = [];
for (let i = 0; i < L; i++) {
    const [n, d] = input[K + 3 + i].split(" ");
    rotates.push([Number(n), d]);
}

const rotatePosition = rotates.map((v) => v[0]);
const board = Array.from({ length: N + 1 }, () => new Array(N + 1).fill(0));
apples.forEach(([x, y]) => (board[x][y] = 1));

const dx = [0, 1, 0, -1];
const dy = [1, 0, -1, 0];

let idx = 1;
let dir = 0;
let [x, y] = [1, 1];
board[x][y] = 2;

const queue = [];
queue.push([x, y]);

while (true) {
    // 1. 몸 길이 늘리기
    const nx = x + dx[dir];
    const ny = y + dy[dir];

    // 2. 부딪히면 끝남
    if (nx <= 0 || nx >= N + 1 || ny <= 0 || ny >= N + 1) break;
    if (board[nx][ny] === 2) break;

    if (board[nx][ny] === 0) {
        // 3. 사과 없으면
        board[nx][ny] = 2;
        const [tx, ty] = queue.shift();
        board[tx][ty] = 0;
    } else if (board[nx][ny] === 1) {
        // 4. 사과 있으면
        board[nx][ny] = 2;
    }

    const p = rotatePosition.indexOf(idx);
    if (p !== -1) {
        const d = rotates[p][1];

        if (d === "D") {
            dir = (dir + 1) % 4;
        } else {
            dir = (4 + dir - 1) % 4;
        }
    }

    queue.push([nx, ny]);
    x = nx;
    y = ny;
    idx++;
}

console.log(idx);
