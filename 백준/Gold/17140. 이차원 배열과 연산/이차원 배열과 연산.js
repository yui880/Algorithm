const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let idx = 0;
const [r, c, k] = input[idx++].split(" ").map(Number);
let board = [];

while (input.length > idx) {
  board.push(input[idx++].split(" ").map(Number));
}

const sortArr = (arr) => {
  const count = new Map();

  arr.filter((v) => v).forEach((v) => (count.has(v) ? count.set(v, count.get(v) + 1) : count.set(v, 1)));

  const ordered = [...count.entries()]
    .sort((a, b) => a[1] - b[1] || a[0] - b[0])
    .slice(0, 50)
    .flat(2);

  return ordered;
};

const calc = (board) => {
  const updated = board.map((arr) => sortArr(arr));

  const maxLen = Math.min(100, Math.max(...updated.map((v) => v.length)));

  const result = updated.map((v) => {
    const temp = [...v];
    while (temp.length < maxLen) temp.push(0);

    return temp;
  });

  return result;
};

const rotate = (arr) => {
  if (arr.length === 0) return [];
  return arr[0].map((_, colIndex) => arr.map((row) => row[colIndex]));
};

let time = 0;
while (time <= 100) {
  if (r - 1 < board.length && c - 1 < board[0].length && board[r - 1][c - 1] === k) {
    break;
  }
  time++;

  if (board.length >= board[0].length) {
    board = calc(board);
  } else {
    const cols = rotate(board);
    const result = calc(cols);
    board = rotate(result);
  }
}

if (time > 100) console.log(-1);
else console.log(time);
