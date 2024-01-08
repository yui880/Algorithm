//1932

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Silver/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = parseInt(input.shift());
const board = input.map((i) => i.split(" ").map(Number));
const dp = Array.from(new Array(n), () => new Array(n).fill(0));


const integerTriangle = () => {
    dp[0][0] = board[0][0];
    for (let i = 1; i < n; i++) {
        for (let j = 0; j <= i; j++) {
            const temp = [];
            if (dp[i - 1][j]) temp.push(dp[i - 1][j]);
            if (dp[i - 1][j - 1]) temp.push(dp[i - 1][j - 1]);
            dp[i][j] = Math.max(...temp) + board[i][j];
        }
    }
    return Math.max(...dp[n - 1]);
};

console.log(integerTriangle());


// const integerTriangle = () => {
//     let max = 0;
//     for (let k = 0; k < 2; k++) {
//         let sum = board[0][0] + board[1][k];
//         let j = k;
//         for (let i = 1; i < n - 1; i++) {
//             if (dp[i][j]) {
//                 sum += dp[i][j];
//             } else {
//                 if (board[i + 1][j] > board[i + 1][j + 1]) {
//                     dp[i][j] = board[i + 1][j];
//                     sum += board[i + 1][j];
//                 } else {
//                     dp[i][j] = board[i + 1][j + 1];
//                     sum += board[i + 1][j + 1];
//                     j = j + 1;
//                 }
//             }
//         }
//         max = Math.max(max, sum);
//     }
//     console.log(dp);
//     return max;
// };