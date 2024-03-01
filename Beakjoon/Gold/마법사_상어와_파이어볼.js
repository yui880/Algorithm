// 14499
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M, K] = input.shift().split(" ").map(Number);
let fireball = input.map((str) => str.split(" ").map(Number));

const dx = [-1, -1, 0, 1, 1, 1, 0, -1];
const dy = [0, 1, 1, 1, 0, -1, -1, -1];

const board = Array.from({ length: N }, () => Array.from({ length: N }, () => new Array(0)));
fireball.forEach(([r, c, m, s, d]) => {
    board[r - 1][c - 1].push([m, s, d]);
});

for (let t = 0; t < K; t++) {
    const tempFire = [];

    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            if (board[i][j].length) {
                board[i][j].forEach((v) => {
                    const [m, s, d] = v;
                    const nx = (i + dx[d] * s + N * 100000) % N;
                    const ny = (j + dy[d] * s + N * 100000) % N;

                    tempFire.push([nx, ny, m, s, d]);
                });
            }
            board[i][j] = [];
        }
    }

    tempFire.forEach(([x, y, m, s, d]) => {
        board[x][y].push([m, s, d]);
    });

    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            if (board[i][j].length > 1) {
                const totalM = Math.floor(board[i][j].reduce((sum, cur) => sum + cur[0], 0) / 5);
                const totalS = Math.floor(board[i][j].reduce((sum, cur) => sum + cur[1], 0) / board[i][j].length);
                let [isEven, isOdd] = [true, true];

                board[i][j].forEach(([m, s, d]) => {
                    if (d % 2 === 0) isOdd = false;
                    else isEven = false;
                });

                if (totalM === 0) {
                    board[i][j] = [];
                    continue;
                }

                let dirList = isEven || isOdd ? [0, 2, 4, 6] : [1, 3, 5, 7];
                const temp = [];
                dirList.forEach((d) => {
                    temp.push([totalM, totalS, d]);
                });
                board[i][j] = temp;
            }
        }
    }
}

let sum = 0;

for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
        if (board[i][j].length) {
            board[i][j].forEach((v) => {
                const [m, s, d] = v;
                sum += m;
            });
        }
    }
}

console.log(sum);
