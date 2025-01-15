const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m] = input.shift().split(" ").map(Number);
const board = input.map((str) => str.split(""));

const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

const bfs = (a, b) => {
  let max = 0;
  const queue = [[a, b, 0]];

  const visited = Array.from({ length: n }, () => Array(m).fill(false));
  visited[a][b] = true;

  let idx = 0;
  while (queue.length > idx) {
    const [x, y, t] = queue[idx++];

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;
      if (!visited[nx][ny] && board[nx][ny] === "L") {
        queue.push([nx, ny, t + 1]);
        if (max < t + 1) max = t + 1;
        visited[nx][ny] = true;
      }
    }
  }

  return max;
};

let answer = 0;

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (board[i][j] === "L") {
      answer = Math.max(bfs(i, j), answer);
    }
  }
}

console.log(answer);
