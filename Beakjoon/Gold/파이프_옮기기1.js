// 17140
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input.shift());
const board = input.map((str) => str.split(" "));

// 0 : 가로
// 1 : 세로
// 2: 대각선

const dx = [0, 1, 1];
const dy = [1, 0, 1];

const directions = [
    [0, 2],
    [1, 2],
    [0, 1, 2],
];

// let count = 0;

// const dfs = (x, y, d) => {
//     if (x === N - 1 && y === N - 1) {
//         count++;
//         return;
//     }

//     const available = Array(3).fill(false);
//     for (let i = 0; i < 3; i++) {
//         const nx = x + dx[i];
//         const ny = y + dy[i];

//         if (nx >= 0 && nx < N && ny >= 0 && ny < N && board[nx][ny] === "0") {
//             if (i === 0 || i === 1) {
//                 available[i] = [nx, ny, i];
//             }
//             if (i === 2 && available[0] !== false && available[1] !== false) {
//                 available[i] = [nx, ny, i];
//             }
//         }
//     }

//     if (d === 0) {
//         if (available[0] !== false) dfs(...available[0]);
//         if (available[2] !== false) dfs(...available[2]);
//     }
//     if (d === 1) {
//         if (available[1] !== false) dfs(...available[1]);
//         if (available[2] !== false) dfs(...available[2]);
//     }
//     if (d === 2) {
//         if (available[0] !== false) dfs(...available[0]);
//         if (available[1] !== false) dfs(...available[1]);
//         if (available[2] !== false) dfs(...available[2]);
//     }
// };

// if (board[N - 1][N - 1] === "1") {
//     console.log(0);
// } else {
//     dfs(0, 1, 0);
//     console.log(count);
// }

const dp = Array.from({ length: N }, () => Array.from({ length: N }, () => Array(3).fill(0)));
dp[0][1][0] = 1;

for (let j = 2; j < N; j++) {
    if (board[0][j] === "0") dp[0][j][0] = dp[0][j - 1][0];
}

for (let i = 1; i < N; i++) {
    for (let j = 2; j < N; j++) {
        if (board[i][j] === "0") {
            dp[i][j][0] = dp[i][j - 1][0] + dp[i][j - 1][2];
            dp[i][j][1] = dp[i - 1][j][1] + dp[i - 1][j][2];
            if (board[i - 1][j] === "0" && board[i][j - 1] === "0") {
                dp[i][j][2] = dp[i - 1][j - 1][0] + dp[i - 1][j - 1][1] + dp[i - 1][j - 1][2];
            }
        }
    }
}

console.log(dp[N - 1][N - 1][0] + dp[N - 1][N - 1][1] + dp[N - 1][N - 1][2]);
