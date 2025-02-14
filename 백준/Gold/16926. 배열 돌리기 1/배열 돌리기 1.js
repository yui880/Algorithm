const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m, r] = input.shift().split(" ").map(Number);
const board = input.map((str) => str.split(" ").map(Number));

const dx = [0, 1, 0, -1];
const dy = [1, 0, -1, 0];

const getArr = (start) => {
  const arr = [];
  let x = start;
  let y = start;
  let dir = 0;

  while (dir < 4) {
    arr.push(board[x][y]);
    const nx = x + dx[dir];
    const ny = y + dy[dir];

    if (nx < start || nx >= n - start || ny < start || ny >= m - start) {
      dir++;

      if (dir === 4) break;
      x += dx[dir];
      y += dy[dir];
    } else {
      x = nx;
      y = ny;
    }
  }

  arr.pop();
  return arr;
};

const setArr = (start, list) => {
  let idx = 0;
  let x = start,
    y = start;
  let dir = 0;

  while (idx < list.length) {
    board[x][y] = list[idx++];
    const nx = x + dx[dir];
    const ny = y + dy[dir];

    if (nx < start || nx >= n - start || ny < start || ny >= m - start) {
      dir++;
      if (dir === 4) break;
      x += dx[dir];
      y += dy[dir];
    } else {
      x = nx;
      y = ny;
    }
  }
};

let count = Math.min(Math.floor(n / 2), Math.floor(m / 2));
let idx = 0;

while (idx < count) {
  const arr = getArr(idx);
  const move = r % arr.length;
  const rotated = [...arr.slice(move), ...arr.slice(0, move)];

  setArr(idx, rotated);

  idx++;
}

console.log(board.map((row) => row.join(" ")).join("\n"));
