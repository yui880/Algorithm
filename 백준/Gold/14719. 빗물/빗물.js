const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [h, w] = input[0].split(" ").map(Number);
const list = input[1].split(" ").map(Number);

let maxHeight = list[0];
let answer = 0;

let i = 0;
while (i < list.length) {
  const next = list.findIndex((val, j) => val >= list[i] && j > i);
  if (maxHeight === 0) {
    i = next;
    maxHeight = list[next];
    continue;
  }

  if (next === -1) {
    list[i] -= 1;

    if (list[i] <= 0) break;
    continue;
  }

  const min = Math.min(list[i], list[next]);

  for (let j = i + 1; j < next; j++) {
    answer += min - list[j];
  }
  i = next;
  maxHeight = list[next];
}

console.log(answer);
