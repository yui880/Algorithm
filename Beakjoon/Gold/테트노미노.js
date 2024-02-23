// 14500
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const board = input.map((str) => str.split(" ").map(Number));

const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

let visited = Array.from({ length: N }, () => Array(M).fill(false));
let max = 0;

const tracking = (x, y, count, sum) => {
    if (count === 4) {
        if (sum > max) max = sum;
        return;
    }

    for (let i = 0; i < 4; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];

        if (nx < 0 || nx >= N || ny < 0 || ny >= M) continue;
        if (!visited[nx][ny]) {
            visited[nx][ny] = true;
            tracking(nx, ny, count + 1, sum + board[nx][ny]);
            visited[nx][ny] = false;
        }
    }
};

const special = (x, y) => {
    const val = [];
    let sum = board[x][y];

    for (let i = 0; i < 4; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];

        if (nx < 0 || nx >= N || ny < 0 || ny >= M) continue;
        val.push(board[nx][ny]);
        sum += board[nx][ny];
    }

    if (val.length === 3) {
        if (max < sum) max = sum;
        return;
    }

    for (let i = 0; i < 4; i++) {
        let temp = sum - val[i];
        if (max < temp) max = temp;
    }
};

for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
        visited[i][j] = true;
        tracking(i, j, 1, board[i][j]);
        special(i, j);
        visited[i][j] = false;
    }
}

console.log(max);
