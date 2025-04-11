const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m] = input.shift().split(" ").map(Number);
const board = input.map((str) => str.split(""));

const dx = [0, 1];
const dy = [1, 0];
const val = ["-", "|"];

const visited = Array.from({ length: n }, () => Array(m).fill(false));

const check = (a, b, dir) => {
  const stack = [];
  stack.push([a, b]);
  visited[a][b] = true;

  while (stack.length > 0) {
    const [x, y] = stack.pop();

    const nx = x + dx[dir];
    const ny = y + dy[dir];

    if (nx < 0 || nx >= n || ny < 0 || ny >= m) return;

    if (!visited[nx][ny] && val[dir] === board[nx][ny]) {
      visited[nx][ny] = true;
      stack.push([nx, ny]);
    }
  }
};

let answer = 0;

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (!visited[i][j]) {
      const dir = board[i][j] === "-" ? 0 : 1;
      check(i, j, dir);
      answer++;
    }
  }
}

console.log(answer);
