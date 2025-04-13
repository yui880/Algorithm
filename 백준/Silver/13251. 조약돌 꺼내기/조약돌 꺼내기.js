const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const m = +input[0];
const list = input[1].split(" ").map(Number);
const k = +input[2];

const n = list.reduce((sum, count) => sum + count, 0);

const combination = (n, k) => {
  if (k > n) return 0;

  let res = 1;
  for (let i = 0; i < k; i++) {
    res *= (n - i) / (i + 1);
  }

  return res;
};

let answer = 0;
const total = combination(n, k);

for (let i = 0; i < m; i++) {
  if (list[i] < k) continue;

  answer += combination(list[i], k);
}

console.log(answer / total);
