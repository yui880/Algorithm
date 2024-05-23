// 20165
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M, R] = input.shift().split(" ").map(Number);

const board = [];
for (let i = 0; i < N; i++) {
    board.push(input[i].split(" ").map(Number));
}

const attack = [];
const defence = [];

for (let i = N; i < N + R * 2; i += 2) {
    attack.push(input[i].split(" ").map((val) => (isNaN(val) ? val : Number(val) - 1)));
    defence.push(input[i + 1].split(" ").map((val) => Number(val) - 1));
}

const directions = {
    E: [0, 1],
    W: [0, -1],
    S: [1, 0],
    N: [-1, 0],
};

const visited = Array.from({ length: N }, () => new Array(M).fill("S"));
let totalScore = 0;

const recursive = (x, y, d) => {
    const [dx, dy] = directions[d];
    const count = board[x][y];

    let nx = x;
    let ny = y;

    for (let j = 0; j < count; j++) {
        if (nx < 0 || nx >= N || ny < 0 || ny >= M) continue;
        if (visited[nx][ny] === "S") {
            visited[nx][ny] = "F";
            totalScore++;
            recursive(nx, ny, d);
        }

        nx += dx;
        ny += dy;
    }
};

for (let i = 0; i < R; i++) {
    const [x, y, d] = attack[i];
    const [a, b] = defence[i];

    recursive(x, y, d);
    visited[a][b] = "S";
}

console.log(totalScore);
visited.forEach((val) => {
    console.log(val.join(" "));
});
