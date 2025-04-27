const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m] = input.shift().split(" ").map(Number);
const board = input.map((str) => str.split(""));

const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

const visited = Array.from({ length: n }, () => Array(m).fill(false));

const bfs = (a, b) => {
  const queue = [];
  queue.push([a, b]);
  visited[a][b] = true;

  let oCount = board[a][b] === "k" ? 1 : 0;
  let vCount = board[a][b] === "v" ? 1 : 0;

  let idx = 0;
  while (queue.length > idx) {
    const [x, y] = queue[idx++];

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx < 0 || nx >= n || ny < 0 || ny >= m || visited[nx][ny]) continue;
      if (board[nx][ny] === "k") {
        visited[nx][ny] = true;
        oCount++;
        queue.push([nx, ny]);
      } else if (board[nx][ny] === "v") {
        visited[nx][ny] = true;
        vCount++;
        queue.push([nx, ny]);
      } else if (board[nx][ny] === ".") {
        visited[nx][ny] = true;
        queue.push([nx, ny]);
      }
    }
  }

  if (vCount < oCount) {
    return [oCount, 0];
  } else {
    return [0, vCount];
  }
};

let oTotal = 0;
let vTotal = 0;

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (!visited[i][j] && board[i][j] != "#") {
      const [o, v] = bfs(i, j);
      oTotal += o;
      vTotal += v;
    }
  }
}

console.log(oTotal, vTotal);
