const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = +input[0];
const dice = input[1].split(" ").map(Number);

const twoSide = [
  [1, 2],
  [1, 3],
  [1, 4],
  [1, 5],
  [2, 3],
  [2, 4],
  [2, 6],
  [3, 5],
  [3, 6],
  [4, 5],
  [4, 6],
  [5, 6],
];

const threeSide = [
  [1, 2, 3],
  [1, 2, 4],
  [1, 3, 5],
  [1, 4, 5],
  [2, 3, 6],
  [2, 4, 6],
  [3, 5, 6],
  [4, 5, 6],
];

const sum = dice.reduce((acc, cur) => acc + cur, 0);

const x = Math.min(...dice);
const y = Math.min(...twoSide.map(([a, b]) => dice[a - 1] + dice[b - 1]));
const z = Math.min(...threeSide.map(([a, b, c]) => dice[a - 1] + dice[b - 1] + dice[c - 1]));
const k = Math.min(...dice.map((v) => sum - v));

if (n === 1) console.log(k);
else {
  let answer = z * 4 + (n * 8 - 12) * y;
  if (n >= 3) answer += (4 * n * n - 12 * n + 8 + (n - 2) * (n - 2)) * x;
  console.log(answer);
}