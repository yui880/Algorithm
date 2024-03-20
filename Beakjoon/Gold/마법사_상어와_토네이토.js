// 20057
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const top = [
    [-2, 0, 5],
    [-1, 1, 10],
    [-1, -1, 10],
    [0, 1, 7],
    [0, -1, 7],
    [0, -2, 2],
    [0, 2, 2],
    [1, 1, 1],
    [1, -1, 1],
    [-1, 0, 0],
];

const down = [
    [2, 0, 5],
    [1, 1, 10],
    [1, -1, 10],
    [0, 1, 7],
    [0, -1, 7],
    [0, -2, 2],
    [0, 2, 2],
    [-1, 1, 1],
    [-1, -1, 1],
    [1, 0, 0],
];

const left = [
    [0, -2, 5],
    [1, -1, 10],
    [-1, -1, 10],
    [1, 0, 7],
    [-1, 0, 7],
    [-2, 0, 2],
    [2, 0, 2],
    [1, 1, 1],
    [-1, 1, 1],
    [0, -1, 0],
];

const right = [
    [0, 2, 5],
    [1, 1, 10],
    [-1, 1, 10],
    [1, 0, 7],
    [-1, 0, 7],
    [-2, 0, 2],
    [2, 0, 2],
    [1, -1, 1],
    [-1, -1, 1],
    [0, 1, 0],
];

const N = Number(input.shift());
const board = input.map((str) => str.split(" ").map(Number));

const start = Math.floor(N / 2);

const order = [];
for (let i = 1; i < N; i++) {
    order.push(i);
    order.push(i);
    if (i === N - 1) order.push(i);
}

let answer = 0;

const moveSand = (a, b, list) => {
    let total = board[a][b];
    list.forEach(([x, y, percent]) => {
        const nx = a + x;
        const ny = b + y;
        const sand = Math.floor((board[a][b] * percent) / 100);

        if (nx < 0 || nx >= N || ny < 0 || ny >= N) {
            if (percent === 0) {
                answer += total;
                return;
            }
            answer += sand;
            total -= sand;
            return;
        }

        if (percent === 0) {
            board[nx][ny] += total;
            return;
        }

        board[nx][ny] += sand;
        total -= sand;
    });

    board[a][b] = 0;
};

let idx = 0;
let [x, y] = [start, start];

while (true) {
    if (idx >= order.length) break;

    for (let i = 0; i < order[idx]; i++) {
        y -= 1;
        moveSand(x, y, left);
    }
    idx++;
    for (let i = 0; i < order[idx]; i++) {
        x += 1;
        moveSand(x, y, down);
    }
    idx++;
    for (let i = 0; i < order[idx]; i++) {
        y += 1;
        moveSand(x, y, right);
    }
    idx++;
    for (let i = 0; i < order[idx]; i++) {
        x -= 1;
        moveSand(x, y, top);
    }
    idx++;
}

console.log(answer);
