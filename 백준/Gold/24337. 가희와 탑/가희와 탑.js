const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, a, b] = input[0].split(" ").map(Number);

if (a + b > n + 1) {
  console.log(-1);
  process.exit(0);
}

const answer = [];
for (let i = 1; i < a; i++) {
  answer.push(i);
}

answer.push(Math.max(a, b));

for (let i = b - 1; i > 0; i--) {
  answer.push(i);
}

if (answer.length > n) {
  console.log(-1); // 조건을 충족시킬 수 없음
} else {
  const oneLen = n - answer.length;

  console.log([answer[0], ...Array(oneLen).fill(1), ...answer.slice(1)].join(" "));
}
