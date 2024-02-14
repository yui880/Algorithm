// 15683
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input.shift().split(" ").map(Number);
let cctv = [];
let zeroCount = 0;
const initBoard = input.map((str, i) => {
    const temp = str.split(" ").map(Number);
    temp.forEach((val, j) => {
        if (val !== 0 && val !== 6) cctv.push([i, j]);
        if (val === 0) zeroCount++;
    });

    return temp;
});

const board = Array.from({ length: N }, () => new Array(M));

const dx = [1, 0, -1, 0];
const dy = [0, 1, 0, -1];

const update = (x, y, dir) => {
    dir %= 4;
    while (true) {
        x += dx[dir];
        y += dy[dir];

        if (x < 0 || x >= N || y < 0 || y >= M || board[x][y] === 6) return;
        if (board[x][y] !== 0) continue;
        board[x][y] = "#";
    }
};

for (let i = 0; i < 1 << (2 * cctv.length); i++) {
    for (let x = 0; x < N; x++) {
        for (let y = 0; y < M; y++) {
            board[x][y] = initBoard[x][y];
        }
    }

    let num = i;
    for (let j = 0; j < cctv.length; j++) {
        const [x, y] = cctv[j];

        const dir = num % 4;
        num = Math.floor(num / 4);

        if (board[x][y] === 1) {
            update(x, y, dir);
        } else if (board[x][y] === 2) {
            update(x, y, dir);
            update(x, y, dir + 2);
        } else if (board[x][y] === 3) {
            update(x, y, dir);
            update(x, y, dir + 1);
        } else if (board[x][y] === 4) {
            update(x, y, dir);
            update(x, y, dir + 1);
            update(x, y, dir + 2);
        } else {
            update(x, y, dir);
            update(x, y, dir + 1);
            update(x, y, dir + 2);
            update(x, y, dir + 3);
        }
    }

    let tempZeroCount = 0;
    for (let x = 0; x < N; x++) {
        for (let y = 0; y < M; y++) {
            if (board[x][y] === 0) {
                tempZeroCount++;
            }
        }
    }
    if (zeroCount > tempZeroCount) zeroCount = tempZeroCount;
}

console.log(zeroCount);
