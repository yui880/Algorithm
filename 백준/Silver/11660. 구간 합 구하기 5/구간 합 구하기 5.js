const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const board = [];
const points = [];

for (let i = 1; i <= n; i++) {
  board.push(input[i].split(" ").map(Number));
}

for (let i = n + 1; i < n + m + 1; i++) {
  const [y1, x1, y2, x2] = input[i].split(" ").map((v) => Number(v) - 1);
  points.push([x1, y1, x2, y2]);
}

const dp = Array.from({ length: n }, () => Array(n).fill(0));

const cols = Array(n).fill(0);

for (let i = 0; i < n; i++) {
  let row = 0;

  for (let j = 0; j < n; j++) {
    if (i - 1 >= 0 && j - 1 >= 0) dp[i][j] += dp[i - 1][j - 1];
    if (j - 1 >= 0) dp[i][j] += row;
    if (i - 1 >= 0) dp[i][j] += cols[j];
    dp[i][j] += board[i][j];

    row += board[i][j];
    cols[j] += board[i][j];
  }
}

let answer = [];

for (const [y1, x1, y2, x2] of points) {
  let temp = dp[x2][y2];
  if (y1 - 1 >= 0) temp -= dp[x2][y1 - 1];
  if (x1 - 1 >= 0) temp -= dp[x1 - 1][y2];
  if (x1 - 1 >= 0 && y1 - 1 >= 0) temp += dp[x1 - 1][y1 - 1];

  answer.push(temp);
}

console.log(answer.join("\n"));
