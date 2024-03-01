// 14499
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M, a, b, K] = input[0].split(" ").map(Number);
const board = [];
for (let i = 1; i <= N; i++) {
    board.push(input[i].split(" ").map(Number));
}
const move = input[N + 1].split(" ").map(Number);

const getNewDice = (d, num) => {
    const newDice = new Array(6).fill(0);
    if (num === 1) {
        newDice[0] = d[3];
        newDice[1] = d[1];
        newDice[2] = d[0];
        newDice[3] = d[5];
        newDice[4] = d[4];
        newDice[5] = d[2];
    }
    if (num === 2) {
        newDice[0] = d[2];
        newDice[1] = d[1];
        newDice[2] = d[5];
        newDice[3] = d[0];
        newDice[4] = d[4];
        newDice[5] = d[3];
    }
    if (num === 3) {
        newDice[0] = d[1];
        newDice[1] = d[5];
        newDice[2] = d[2];
        newDice[3] = d[3];
        newDice[4] = d[0];
        newDice[5] = d[4];
    }
    if (num === 4) {
        newDice[0] = d[4];
        newDice[1] = d[0];
        newDice[2] = d[2];
        newDice[3] = d[3];
        newDice[4] = d[5];
        newDice[5] = d[1];
    }

    return newDice;
};

let dice = Array(6).fill(0);

let [x, y] = [a, b];
const dx = [0, 0, -1, 1];
const dy = [1, -1, 0, 0];

move.forEach((v) => {
    const nx = x + dx[v - 1];
    const ny = y + dy[v - 1];

    if (nx < 0 || nx >= N || ny < 0 || ny >= M) return;

    dice = getNewDice(dice, v);

    if (board[nx][ny] === 0) {
        board[nx][ny] = dice[5];
    } else {
        dice[5] = board[nx][ny];
        board[nx][ny] = 0;
    }

    x = nx;
    y = ny;
    console.log(dice[0]);
});
