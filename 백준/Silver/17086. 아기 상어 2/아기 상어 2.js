const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const dx = [1, 1, 0, -1, -1, -1, 0, 1];
const dy = [0, 1, 1, 1, 0, -1, -1, -1];

const [n, m] = input.shift().split(" ").map(Number);
const board = input.map((str) => str.split(" ").map(Number));

const visited = Array.from({ length: n }, () => Array(m).fill(Infinity));

const bfs = (a, b) => {
  const queue = [];
  queue.push([a, b, 0]);

  visited[a][b] = 0;

  let idx = 0;
  while (queue.length > idx) {
    const [x, y, d] = queue[idx++];
    if (visited[x][y] > d) continue;

    for (let i = 0; i < 8; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;
      if (visited[nx][ny] > d + 1) {
        {
          visited[nx][ny] = d + 1;
          queue.push([nx, ny, d + 1]);
        }
      }
    }
  }
};

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (board[i][j] === 1) {
      bfs(i, j);
    }
  }
}

console.log(Math.max(...visited.flat(2)));
