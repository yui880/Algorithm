const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m] = input.shift().split(" ").map(Number);
let [sx, sy] = [0, 0];

const board = input.map((str, i) => {
  const row = str.split("");
  row.forEach((v, j) => {
    if (v === "I") {
      sx = i;
      sy = j;
    }
  });

  return row;
});

const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

const queue = [];
let idx = 0;
const visited = Array.from({ length: n }, () => Array(m).fill(false));

queue.push([sx, sy]);
visited[sx][sy] = true;
let count = 0;

while (queue.length > idx) {
  const [x, y] = queue[idx++];

  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];

    if (nx < 0 || nx >= n || ny < 0 || ny >= m || visited[nx][ny]) continue;
    if (board[nx][ny] === "O") {
      visited[nx][ny] = true;
      queue.push([nx, ny]);
    }
    if (board[nx][ny] === "P") {
      count++;
      visited[nx][ny] = true;
      queue.push([nx, ny]);
    }
  }
}

if (count > 0) console.log(count);
else console.log("TT");
