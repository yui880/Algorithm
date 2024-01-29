// 3055
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [R, C] = input[0].split(" ").map(Number);
const board = [];
let sx, sy, ex, ey;
const waters = [];

const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

for (let i = 1; i < input.length; i++) {
    const temp = input[i].split("");

    temp.forEach((v, j) => {
        if (v === "S") {
            sx = i - 1;
            sy = j;
        }
        if (v === "D") {
            ex = i - 1;
            ey = j;
        }
        if (v === "*") {
            waters.push([i - 1, j, 0]);
        }
    });

    board.push(temp);
}

const waterVisited = Array.from({ length: R }, () => new Array(C).fill(Infinity));
const personVisited = Array.from({ length: R }, () => new Array(C).fill(false));

const waterBfs = () => {
    const queue = [...waters];
    queue.forEach(([x, y, t]) => (waterVisited[x][y] = t));

    let idx = 0;
    while (queue.length > idx) {
        const [x, y, t] = queue[idx++];

        for (let i = 0; i < 4; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];

            if (nx < 0 || nx >= R || ny < 0 || ny >= C) continue;
            if (waterVisited[nx][ny] > t + 1 && board[nx][ny] === ".") {
                queue.push([nx, ny, t + 1]);
                waterVisited[nx][ny] = t + 1;
            }
        }
    }
};

const personBfs = () => {
    const queue = [];
    queue.push([sx, sy, 0]);
    personVisited[sx][sy] = true;

    let idx = 0;
    while (queue.length > idx) {
        const [x, y, t] = queue[idx++];

        for (let i = 0; i < 4; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];

            if (nx < 0 || nx >= R || ny < 0 || ny >= C) continue;
            if (!personVisited[nx][ny] && board[nx][ny] === "." && waterVisited[nx][ny] > t + 1) {
                queue.push([nx, ny, t + 1]);
                personVisited[nx][ny] = true;
            }
            if (nx === ex && ny === ey) {
                return t + 1;
            }
        }
    }
    return "KAKTUS";
};

waterBfs();
const answer = personBfs();
console.log(answer);
