const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m, r] = input.shift().split(" ").map(Number);
const board = input.map((str) => str.split(" ").map(Number));

const getArr = (num) => {
  const arr = [];

  for (let j = num; j < m - num; j++) {
    arr.push(board[num][j]);
  }

  for (let i = num + 1; i < n - num; i++) {
    arr.push(board[i][m - num - 1]);
  }

  for (let j = m - num - 2; j >= num; j--) {
    arr.push(board[n - num - 1][j]);
  }

  for (let i = n - num - 2; i >= num + 1; i--) {
    arr.push(board[i][num]);
  }

  return arr;
};

const setArr = (num, list) => {
  let idx = 0;

  for (let j = num; j < m - num; j++) {
    board[num][j] = list[idx++];
  }

  for (let i = num + 1; i < n - num; i++) {
    board[i][m - num - 1] = list[idx++];
  }

  for (let j = m - num - 2; j >= num; j--) {
    board[n - num - 1][j] = list[idx++];
  }

  for (let i = n - num - 2; i >= num + 1; i--) {
    board[i][num] = list[idx++];
  }
};

let count = Math.min(Math.ceil(n / 2), Math.ceil(m / 2));
let idx = 0;

while (idx < count) {
  const arr = getArr(idx);
  const move = r % arr.length;
  const rotated = [...arr.slice(move), ...arr.slice(0, move)];

  setArr(idx, rotated);

  idx++;
}

console.log(board.map((row) => row.join(" ")).join("\n"));
