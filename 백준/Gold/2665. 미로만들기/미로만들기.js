const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = +input.shift();
const board = input.map((str) => str.split("").map(Number));

const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

const bfs = () => {
  const queue = [];
  const visited = Array.from({ length: n }, () => Array(n).fill(Infinity));

  if (board[0][0] === 1) {
    queue.push([0, 0, 0]);
    visited[0][0] = 0;
  } else {
    queue.push([0, 0, 1]);
    visited[0][0] = 1;
  }

  let idx = 0;
  while (queue.length > idx) {
    const [x, y, count] = queue[idx++];
    if (count > visited[x][y]) continue;

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx < 0 || nx >= n || ny < 0 || ny >= n) continue;
      if (board[nx][ny] === 1 && count < visited[nx][ny]) {
        queue.push([nx, ny, count]);
        visited[nx][ny] = count;
      } else if (board[nx][ny] === 0 && count + 1 < visited[nx][ny]) {
        queue.push([nx, ny, count + 1]);
        visited[nx][ny] = count + 1;
      }
    }
  }

  return visited[n - 1][n - 1];
};

console.log(bfs());
