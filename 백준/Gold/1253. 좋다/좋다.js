const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = +input[0];
const list = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

let answer = 0;

for (let i = 0; i < n; i++) {
  const target = list[i];

  let left = 0;
  let right = list.length - 1;
  let found = false;

  while (left < right) {
    const sum = list[left] + list[right];

    if (left === i) {
      left++;
      continue;
    }
    if (right === i) {
      right--;
      continue;
    }

    if (sum === target) {
      found = true;
      break;
    } else if (sum > target) {
      right--;
    } else {
      left++;
    }
  }

  if (found) answer++;
}

console.log(answer);
