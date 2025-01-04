const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const t = Number(input.shift());
const list = input.map((str) => str.split(" ").map(Number));

const answer = [];

for (const [x, y] of list) {
  const distance = y - x;
  const max = Math.floor(Math.sqrt(distance));

  if (max ** 2 === distance) {
    answer.push(max * 2 - 1);
  } else if (distance <= max ** 2 + max) {
    answer.push(max * 2);
  } else {
    answer.push(max * 2 + 1);
  }
}

console.log(answer.join("\n"));
