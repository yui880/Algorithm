// 17140
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [r, c, k] = input.shift().split(" ").map(Number);
const board = input.map((str) => str.split(" ").map(Number));

// while (true) {
//     const rSize = board.length;
//     const cSize = board[0].length;

//     if (rSize >= r && cSize >= c) {
//         if (board[r][c] === k) break;
//     }

//     if (rSize >= cSize) {
//         let maxLen = 0;
//         for (let i = 0; i < board.length; i++) {
//             const temp = {};
//             board[i].forEach((v) => {
//                 if (temp[v]) temp[v]++;
//                 else temp[v] = 1;
//             });

//             const sorted = Object.entries(temp)
//                 .map((v) => v.map(Number))
//                 .sort((a, b) => a[1] - b[1] || a[0] - b[0]);

//             board[i] = sorted.flat();
//             maxLen = Math.max(maxLen, board[i].length);
//         }

//         for (let i = 0; i < maxLen; i++) {
//             if (board[i].length >= maxLen) {
//                 const temp = maxLen - board[i].length;
//                 for (let j = 0; j < temp; j++) {
//                     board[i].push(0);
//                 }
//             } else {
//                 board.push(Array(maxLen).fill(0));
//             }
//         }
//     } else {
//     }
// }

// console.log(maxLen);
// console.log(board);
// for (let i = 0; i < board[0].length; i++) {
//     const temp = maxLen - board[i].length;
//     for (let j = 0; j < temp; j++) {
//         board[i].push(0);
//     }
// }

let maxLen = 0;
for (let i = 0; i < board.length; i++) {
    const temp = {};
    board[i].forEach((v) => {
        if (temp[v]) temp[v]++;
        else temp[v] = 1;
    });

    const sorted = Object.entries(temp)
        .map((v) => v.map(Number))
        .sort((a, b) => a[1] - b[1] || a[0] - b[0]);

    board[i] = sorted.flat();
    maxLen = Math.max(maxLen, board[i].length);
}

for (let i = 0; i < board[i].length; i++) {
    const temp = maxLen - board[i].length;
    console.log(temp);
    for (let j = 0; j < temp; j++) {
        board[i].push(0);
    }
}

console.log(maxLen - board.length);
const tmp = maxLen - board.length;
for (let i = 0; i < tmp; i++) {
    console.log(1);
    board.push(Array(maxLen).fill(0));
}

console.log(board);
