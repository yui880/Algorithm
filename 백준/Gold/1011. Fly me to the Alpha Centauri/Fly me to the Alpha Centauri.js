const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const t = Number(input.shift());
const list = input.map((str) => str.split(" ").map(BigInt));

const answer = [];

for (const [x, y] of list) {
  const goal = y - x;
  let moved = 0n;

  let idx = 0n; // 몇번째 이동인지
  let count = 0; // 총 이동 횟수

  while (moved < goal) {
    idx++;

    moved += idx * 2n;
    count += 2;

    if (moved - idx >= goal) {
      answer.push(count - 1);
      break;
    }
    if (moved >= goal) {
      answer.push(count);
      break;
    }
  }
}

console.log(answer.join("\n"));
