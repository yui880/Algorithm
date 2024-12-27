const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const t = Number(input.shift());

let idx = 0;

for (let i = 0; i < t; i++) {
  const [sx, sy, ex, ey] = input[idx++].split(" ").map(Number);
  const n = Number(input[idx++]);
  const planets = input.slice(idx, idx + n).map((str) => str.split(" ").map(Number));

  idx += n;

  const check = (x, y, r) => {
    const start = (x - sx) ** 2 + (y - sy) ** 2 < r ** 2; // s가 내부에 있는지
    const end = (x - ex) ** 2 + (y - ey) ** 2 < r ** 2; // e가 내부에 있는지

    return !(start && end) && (start || end);
  };

  let answer = 0;

  for (const [x, y, r] of planets) {
    const result = check(x, y, r);
    if (result) answer += 1;
  }

  console.log(answer);
}
