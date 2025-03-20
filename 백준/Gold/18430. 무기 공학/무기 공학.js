const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m] = input.shift().split(" ").map(Number);
const board = input.map((str) => str.split(" ").map(Number));

const visited = Array.from({ length: n }, () => Array(m).fill(false));

const diff = [
  [
    [-1, 0],
    [0, -1],
  ],
  [
    [-1, 0],
    [0, 1],
  ],
  [
    [1, 0],
    [0, -1],
  ],
  [
    [1, 0],
    [0, 1],
  ],
];

let answer = 0;

const dfs = (x, y, score) => {
  answer = Math.max(answer, score);

  if (y === m) {
    y = 0;
    x++;
  }

  if (x === n) return;

  // 부메랑 고르기
  if (!visited[x][y]) {
    for (let i = 0; i < 4; i++) {
      const x1 = x + diff[i][0][0];
      const y1 = y + diff[i][0][1];
      const x2 = x + diff[i][1][0];
      const y2 = y + diff[i][1][1];

      if (x1 < 0 || x2 < 0 || x1 >= n || x2 >= n || y1 < 0 || y2 < 0 || y1 >= m || y2 >= m) continue;
      if (visited[x1][y1] || visited[x2][y2]) continue;

      const curScore = board[x][y] * 2 + board[x1][y1] + board[x2][y2];

      visited[x1][y1] = true;
      visited[x][y] = true;
      visited[x2][y2] = true;

      dfs(x, y + 1, score + curScore);

      visited[x1][y1] = false;
      visited[x][y] = false;
      visited[x2][y2] = false;
    }
  }

  // 부메랑 안고르기
  dfs(x, y + 1, score);
};

dfs(0, 0, 0);

console.log(answer);
