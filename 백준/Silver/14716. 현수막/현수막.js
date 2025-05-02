const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const dx = [1, 1, 0, -1, -1, -1, 0, 1];
const dy = [0, 1, 1, 1, 0, -1, -1, -1];

const [n, m] = input.shift().split(" ").map(Number);
const board = input.map((str) => str.split(" ").map(Number));

const visited = Array.from({ length: n }, () => Array(m).fill(false));

const bfs = (a, b) => {
  const queue = [];
  queue.push([a, b, 1]);
  visited[a][b] = true;

  let idx = 0;
  while (queue.length > idx) {
    const [x, y, d] = queue[idx++];

    for (let i = 0; i < 8; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;
      if (!visited[nx][ny] && board[nx][ny] === 1) {
        visited[nx][ny] = true;
        queue.push([nx, ny, d + 1]);
      }
    }
  }
};

let answer = 0;

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (board[i][j] === 1 && !visited[i][j]) {
      bfs(i, j);
      answer++;
    }
  }
}

console.log(answer);
