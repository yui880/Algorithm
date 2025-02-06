const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [m, n] = input.shift().split(" ").map(Number);
const board = input.map((str) => str.split("").map(Number));
const wall = Array.from({ length: n }, () => Array(m).fill(Infinity));

const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

const bfs = (a, b) => {
  const queue = [[a, b, 0]];
  wall[a][b] = 0;

  let idx = 0;
  while (queue.length > idx) {
    const [x, y, broken] = queue[idx++];

    if (broken > wall[x][y]) continue;

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;

      if (board[nx][ny] === 1 && broken + 1 < wall[nx][ny]) {
        wall[nx][ny] = broken + 1;
        queue.push([nx, ny, broken + 1]);
      }
      if (board[nx][ny] === 0 && broken < wall[nx][ny]) {
        wall[nx][ny] = broken;
        queue.push([nx, ny, broken]);
      }
    }
  }

  return wall[n - 1][m - 1];
};

console.log(bfs(0, 0));
