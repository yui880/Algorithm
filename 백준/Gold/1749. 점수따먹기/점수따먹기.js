const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m] = input.shift().split(" ").map(Number);
const board = input.map((str) => str.split(" ").map(Number));

const sum = Array.from({ length: n + 1 }, () => Array(m + 1).fill(0));

sum[1][1] = board[0][0];

for (let i = 1; i <= n; i++) {
  sum[i][1] += sum[i - 1][1] + board[i - 1][0];
}

for (let i = 1; i <= m; i++) {
  sum[1][i] += sum[1][i - 1] + board[0][i - 1];
}

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= m; j++) {
    sum[i][j] = sum[i - 1][j] + sum[i][j - 1] - sum[i - 1][j - 1] + board[i - 1][j - 1];
  }
}

const calc = (x1, y1, x2, y2) => {
  return sum[x2][y2] - sum[x2][y1 - 1] - sum[x1 - 1][y2] + sum[x1 - 1][y1 - 1];
};

let answer = Math.max(...board.flat(2));

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= m; j++) {
    for (let a = i; a <= n; a++) {
      for (let b = j; b <= m; b++) {
        const sum = calc(i, j, a, b);
        answer = Math.max(answer, sum);
      }
    }
  }
}

console.log(answer);
