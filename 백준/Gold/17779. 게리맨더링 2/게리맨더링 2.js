const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = +input.shift();
const board = input.map((str) => str.split(" ").map(Number));
const total = board.flat(2).reduce((acc, cur) => acc + cur);

const calc = (x, y, d1, d2) => {
  const border = Array.from({ length: n }, () => Array(n));

  for (let i = 0; i <= d1; i++) {
    border[x + i][y - i] = 5;
    border[x + d2 + i][y + d2 - i] = 5;
  }

  for (let i = 0; i <= d2; i++) {
    border[x + i][y + i] = 5;
    border[x + d1 + i][y - d1 + i] = 5;
  }

  const count = Array(5).fill(0);

  for (let i = 0; i < x + d1; i++) {
    for (let j = 0; j <= y; j++) {
      if (border[i][j]) break;
      border[i][j] = 1;
      count[0] += board[i][j];
    }
  }

  for (let i = 0; i <= x + d2; i++) {
    for (let j = n - 1; j > y; j--) {
      if (border[i][j]) break;
      border[i][j] = 2;
      count[1] += board[i][j];
    }
  }

  for (let i = x + d1; i < n; i++) {
    for (let j = 0; j < y - d1 + d2; j++) {
      if (border[i][j]) break;
      border[i][j] = 3;
      count[2] += board[i][j];
    }
  }

  for (let i = x + d2 + 1; i < n; i++) {
    for (let j = n - 1; j >= y - d1 + d2; j--) {
      if (border[i][j]) break;
      border[i][j] = 4;
      count[3] += board[i][j];
    }
  }

  count[4] = total;

  for (let i = 0; i < 4; i++) {
    count[4] -= count[i];
  }

  const min = Math.min(...count);
  const max = Math.max(...count);

  return max - min;
};

let answer = Infinity;

for (let x = 0; x < n; x++) {
  for (let y = 0; y < n; y++) {
    for (let d1 = 1; d1 < n; d1++) {
      for (let d2 = 1; d2 < n; d2++) {
        if (x + d1 + d2 >= n) continue;
        if (y - d1 < 0 || y + d2 >= n) continue;

        const result = calc(x, y, d1, d2);
        answer = Math.min(answer, result);
      }
    }
  }
}

console.log(answer);
