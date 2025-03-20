const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m] = input.shift().split(" ").map(Number);
let [h, w, sx, sy, fx, fy] = input.pop().split(" ").map(Number);

sx--;
sy--;
fx--;
fy--;

const board = input.map((str) => str.split(" ").map(Number));

const visited = Array.from({ length: n }, () => Array(m).fill(false));

const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

function isValidRectangle(topX, topY) {
  if (topX < 0 || topX + h > n || topY < 0 || topY + w > m) {
    return false;
  }

  for (let i = topX; i < topX + h; i++) {
    for (let j = topY; j < topY + w; j++) {
      if (board[i][j] === 1) {
        return false;
      }
    }
  }

  return true;
}

const bfs = (a, b) => {
  const queue = [];
  queue.push([a, b, 0]);

  visited[a][b] = true;

  let idx = 0;
  while (queue.length > idx) {
    const [x, y, d] = queue[idx++];

    if (x === fx && y === fy) {
      return d;
    }

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx < 0 || nx >= n || ny < 0 || ny >= m || visited[nx][ny]) continue;

      const flag = isValidRectangle(nx, ny);
      if (!flag) continue;

      visited[nx][ny] = true;
      queue.push([nx, ny, d + 1]);
    }
  }

  return -1;
};

const answer = bfs(sx, sy);

console.log(answer);
