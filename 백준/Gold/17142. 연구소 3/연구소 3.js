const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m] = input.shift().split(" ").map(Number);

let virus = [];
let remain = 0;
const board = input.map((str, i) => {
  const temp = str.split(" ").map(Number);

  temp.forEach((v, j) => {
    if (v === 2) virus.push([i, j]);
    if (v === 0) remain++;
  });

  return temp;
});

let init = remain;

const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

const bfs = (list) => {
  if (remain === 0) return 0;

  const queue = [];
  const visited = Array.from({ length: n }, () => Array(n).fill(-1));

  list
    .map((v) => virus[v])
    .forEach(([i, j]) => {
      queue.push([i, j, 0]);
      visited[i][j] = 0;
    });

  let idx = 0;
  while (queue.length > idx) {
    const [x, y, t] = queue[idx++];

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx < 0 || nx >= n || ny < 0 || ny >= n) continue;
      if (board[nx][ny] !== 1 && visited[nx][ny] === -1) {
        visited[nx][ny] = t + 1;
        queue.push([nx, ny, t + 1]);

        if (board[nx][ny] === 0) remain--;

        if (remain <= 0) {
          return t + 1;
        }
      }
    }
  }

  return -1;
};

let answer = Infinity;

const combi = Array(m);

const combination = (at, count) => {
  if (count === m) {
    const time = bfs(combi);
    remain = init;

    if (time >= 0) {
      answer = Math.min(answer, time);
    }
    return;
  }

  for (let i = at; i < virus.length; i++) {
    combi[count] = i;
    combination(i + 1, count + 1);
  }
};

combination(0, 0);
console.log(answer === Infinity ? -1 : answer);
