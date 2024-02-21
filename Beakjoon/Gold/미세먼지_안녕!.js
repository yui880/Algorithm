// 17144
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [R, C, T] = input.shift().split(" ").map(Number);
const machine = [];
const board = input.map((row, i) => {
    const temp = row.split(" ").map((col, j) => {
        if (col === "-1") machine.push(i);
        return Number(col);
    });

    return temp;
});

const temp = Array.from({ length: R }, () => new Array(C).fill(0));

const spread = (x, y, val) => {
    let count = 0;
    const dx = [1, -1, 0, 0];
    const dy = [0, 0, 1, -1];

    for (let i = 0; i < 4; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];

        if (nx < 0 || nx >= R || ny < 0 || ny >= C) continue;
        if (board[nx][ny] === -1) continue;
        temp[nx][ny] += val;
        count++;
    }

    return count;
};

const moveCounterClockwise = () => {
    const standard = machine[0];

    for (let i = standard - 1; i > 0; i--) {
        board[i][0] = board[i - 1][0];
    }
    for (let j = 0; j < C - 1; j++) {
        board[0][j] = board[0][j + 1];
    }
    for (let i = 0; i < standard; i++) {
        board[i][C - 1] = board[i + 1][C - 1];
    }
    for (let j = C - 1; j > 0; j--) {
        if (j === 1) board[standard][j] = 0;
        else board[standard][j] = board[standard][j - 1];
    }
};

const moveClockwise = () => {
    const standard = machine[1];

    for (let i = standard + 1; i < R - 1; i++) {
        board[i][0] = board[i + 1][0];
    }
    for (let j = 0; j < C - 1; j++) {
        board[R - 1][j] = board[R - 1][j + 1];
    }
    for (let i = R - 1; i > standard; i--) {
        board[i][C - 1] = board[i - 1][C - 1];
    }
    for (let j = C - 1; j > 0; j--) {
        if (j === 1) board[standard][j] = 0;
        else board[standard][j] = board[standard][j - 1];
    }
};

for (let i = 0; i < T; i++) {
    for (let x = 0; x < R; x++) {
        for (let y = 0; y < C; y++) {
            if (board[x][y] > 0) {
                const dust = Math.floor(board[x][y] / 5);
                const count = spread(x, y, dust);
                board[x][y] -= count * dust;
            }
        }
    }

    for (let x = 0; x < R; x++) {
        for (let y = 0; y < C; y++) {
            board[x][y] += temp[x][y];
            temp[x][y] = 0;
        }
    }

    moveClockwise();
    moveCounterClockwise();
}

let answer = 0;
for (let i = 0; i < R; i++) {
    for (let j = 0; j < C; j++) {
        if (board[i][j] === -1) continue;
        answer += board[i][j];
    }
}

console.log(answer);
