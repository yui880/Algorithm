const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m] = input.shift().split(" ").map(Number);
const board = input.map((str) => str.split(" ").map(Number)).reverse();

const dp = Array.from({ length: n }, () => Array(m).fill(0));

// 초기값 설정
dp[0] = [...board[0]];

for (let i = 1; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (board[i][j] === 0) continue;

    if (board[i - 1][j - 1] === 1) dp[i][j] += dp[i - 1][j - 1] % 1_000_000_007;
    if (board[i - 1][j] === 1) dp[i][j] += dp[i - 1][j] % 1_000_000_007;
    if (board[i - 1][j + 1] === 1) dp[i][j] += dp[i - 1][j + 1] % 1_000_000_007;
  }
}

console.log(dp[n - 1].reduce((sum, cur) => sum + cur, 0) % 1_000_000_007);
