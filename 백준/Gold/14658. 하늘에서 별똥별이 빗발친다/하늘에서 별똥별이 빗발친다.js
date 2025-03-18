const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m, l, k] = input.shift().split(" ").map(Number);

const stars = input.map((str) => str.split(" ").map(Number));
let min = k;

for (const [x1, y1] of stars) {
  for (const [x2, y2] of stars) {
    let sx = x1;
    let sy = y2;

    let count = 0;

    for (const [x, y] of stars) {
      if (sx <= x && x <= sx + l && sy <= y && y <= sy + l) {
        count++;
      }
    }
    min = Math.min(min, k - count);
  }
}

console.log(min);