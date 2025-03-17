const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = Number(input[0]);
const buildings = input[1].split(" ").map(Number);

const calcHeight = (x1, y1, x2, y2, tx, ty) => {
  const slope = (y2 - y1) / (x2 - x1);

  const height = slope * (tx - x1) + y1;

  return ty >= height;
};

const checkVisibility = (from, to) => {
  const x1 = from + 1;
  const y1 = buildings[from];
  const x2 = to + 1;
  const y2 = buildings[to];

  const start = Math.min(from, to);
  const end = Math.max(from, to);

  for (let k = start + 1; k < end; k++) {
    const tx = k + 1;
    const ty = buildings[k];

    if (calcHeight(x1, y1, x2, y2, tx, ty)) {
      return false;
    }
  }

  return true;
};

let max = 0;

for (let i = 0; i < n; i++) {
  let count = 0;

  for (let j = 0; j < n; j++) {
    if (i == j) continue;
    if (checkVisibility(i, j)) count++;
  }

  max = Math.max(max, count);
}

console.log(max);
