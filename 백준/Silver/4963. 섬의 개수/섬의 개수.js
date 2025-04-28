const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

input.pop();

const dx = [1, 1, 0, -1, -1, -1, 0, 1];
const dy = [0, 1, 1, 1, 0, -1, -1, -1];

let id = 0;

while (input.length > id) {
  const [m, n] = input[id++].split(" ").map(Number);
  const board = input.slice(id, id + n).map((str) => str.split(" ").map(Number));
  id += n;

  const visited = Array.from({ length: n }, () => Array(m).fill(false));

  const bfs = (a, b) => {
    const queue = [];
    queue.push([a, b]);
    visited[a][b] = true;

    let idx = 0;
    while (queue.length > idx) {
      const [x, y] = queue[idx++];

      for (let i = 0; i < 8; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];

        if (nx < 0 || nx >= n || ny < 0 || ny >= m || visited[nx][ny]) continue;
        if (board[nx][ny] === 1) {
          visited[nx][ny] = true;
          queue.push([nx, ny]);
        }
      }
    }
  };

  let answer = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (!visited[i][j] && board[i][j] === 1) {
        bfs(i, j);
        answer++;
      }
    }
  }

  console.log(answer);
}
