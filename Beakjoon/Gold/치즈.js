// 2636
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let total = 0;

const [N, M] = input.shift().split(" ").map(Number);
const board = input.map((str) => {
    const temp = str.split(" ");
    temp.forEach((val) => {
        if (val === "1") total++;
    });

    return temp;
});

const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

const bfs = (a, b) => {
    const visited = Array.from({ length: N }, () => new Array(M).fill(false));

    let count = 0;
    const air = [];
    const cheese = [];
    air.push([a, b]);
    visited[a][b] = true;

    let idx = 0;
    while (air.length > idx) {
        const [x, y] = air[idx++];

        for (let i = 0; i < 4; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];

            if (nx < 0 || nx >= N || ny < 0 || ny >= M) continue;
            if (!visited[nx][ny] && board[nx][ny] === "0") {
                air.push([nx, ny]);
                visited[nx][ny] = true;
            } else if (!visited[nx][ny] && board[nx][ny] === "1") {
                cheese.push([nx, ny]);
                visited[nx][ny] = true;
            }
        }
    }

    cheese.forEach(([x, y]) => {
        board[x][y] = "0";
        count++;
    });

    return count;
};

let answer = [];
let remain = total;

while (true) {
    const count = bfs(0, 0);
    if (count === 0) {
        break;
    }
    answer.push(remain - count);
    remain -= count;
}

console.log(answer.length);
console.log(answer.length === 1 ? total : answer[answer.length - 2]);
