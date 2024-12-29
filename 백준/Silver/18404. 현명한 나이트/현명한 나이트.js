const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m] = input.shift().split(" ").map(Number);
const [sx, sy] = input
  .shift()
  .split(" ")
  .map((v) => Number(v) - 1);
const points = input.map((str) => str.split(" ").map((v) => Number(v) - 1));

const dx = [-2, -2, -1, -1, 1, 1, 2, 2];
const dy = [-1, 1, -2, 2, -2, 2, -1, 1];

const bfs = () => {
  const visited = Array.from({ length: n }, () => Array(n).fill(false));
  const distance = Array.from({ length: n }, () => Array(n).fill(Infinity));

  const queue = [];
  queue.push([sx, sy, 0]);
  distance[sx][sy] = 0;

  let idx = 0;
  while (queue.length > idx) {
    const [x, y, d] = queue[idx++];

    for (let i = 0; i < dx.length; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx < 0 || ny < 0 || nx >= n || ny >= n || visited[nx][ny]) continue;

      visited[nx][ny] = true;
      distance[nx][ny] = d + 1;
      queue.push([nx, ny, d + 1]);
    }
  }

  return distance;
};

const d = bfs();
const answer = points.map(([x, y]) => d[x][y]).join(" ");

console.log(answer);
