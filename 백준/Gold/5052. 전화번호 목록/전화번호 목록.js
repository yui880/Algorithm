const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let idx = 0;
const T = Number(input[idx++]);
const answer = [];

for (let i = 0; i < T; i++) {
  const n = Number(input[idx++]);
  const list = [];
  for (let j = 0; j < n; j++) {
    list.push(input[idx + j]);
  }
  idx += n;

  list.sort();

  let isPrefix = false;
  for (let j = 0; j < n - 1; j++) {
    isPrefix = list[j + 1].startsWith(list[j]);
    if (isPrefix) {
      answer.push("NO");
      break;
    }
  }

  if (!isPrefix) answer.push("YES");
}

console.log(answer.join("\n"));
