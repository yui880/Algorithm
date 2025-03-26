const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const board = input.map((str, i) => {
  const row = str.split(" ").map(Number);
  return row;
});

const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

const answer = new Set();

const dfs = (sx, sy) => {
  const stack = [];
  stack.push([sx, sy, `${board[sx][sy]}`]);

  while (stack.length) {
    const [x, y, str] = stack.pop();
    if (str.length === 6) {
      answer.add(str);
      continue;
    }

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx < 0 || nx >= 5 || ny < 0 || ny >= 5) continue;
      stack.push([nx, ny, str + `${board[nx][ny]}`]);
    }
  }
};

for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    dfs(i, j);
  }
}

console.log(answer.size);
