// 16236
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input.shift());
let [sx, sy] = [0, 0];
const board = input.map((str, i) => {
    const temp = str.split(" ").map(Number);
    temp.forEach((val, j) => {
        if (val === 9) {
            sx = i;
            sy = j;
        }
    });

    return temp;
});

board[sx][sy] = 0;

const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

const bfs = (a, b, cur) => {
    const visited = Array.from({ length: N }, () => new Array(N).fill(false));
    const queue = [];
    queue.push([a, b, 0]);

    const temp = [];
    let standard = Infinity;

    let idx = 0;
    while (queue.length > idx) {
        const [x, y, count] = queue[idx++];

        if (board[x][y] !== 0 && board[x][y] < cur) {
            temp.push([x, y, count]);
            if (standard === Infinity) standard = count;
        }

        if (standard < count) break;

        for (let i = 0; i < 4; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];

            if (nx < 0 || nx >= N || ny < 0 || ny >= N) continue;
            if (!visited[nx][ny] && board[nx][ny] <= cur) {
                visited[nx][ny] = true;
                queue.push([nx, ny, count + 1]);
            }
        }
    }

    if (temp.length > 0) {
        temp.sort((a, b) => a[2] - b[2] || a[0] - b[0] || a[1] - b[1]);
        return temp[0];
    } else {
        return false;
    }
};

let time = 0;
let sizeCount = 0;
let [x, y, size] = [sx, sy, 2];

while (true) {
    const temp = bfs(x, y, size);
    if (temp === false) break;

    const [nx, ny, count] = temp;
    time += count;
    x = nx;
    y = ny;
    sizeCount += 1;

    board[x][y] = 0;

    if (sizeCount === size) {
        size += 1;
        sizeCount = 0;
    }
}

console.log(time);
