const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = +input[0];
const buildings = input[1].split(" ").map(Number);

const rightSide = Array(n).fill(Infinity);
const stack = [];

for (let i = 0; i < n; i++) {
  while (stack.length > 0 && buildings[stack[stack.length - 1]] < buildings[i]) {
    const idx = stack.pop();
    rightSide[idx] = i;
  }
  stack.push(i);
}

const leftSide = Array(n).fill(Infinity);
stack.length = 0; // 스택 초기화

for (let i = n - 1; i >= 0; i--) {
  while (stack.length > 0 && buildings[stack[stack.length - 1]] < buildings[i]) {
    const idx = stack.pop();
    leftSide[idx] = i;
  }
  stack.push(i);
}

const rightCount = Array(n).fill(0);
for (let i = n - 1; i >= 0; i--) {
  if (rightSide[i] !== Infinity) {
    rightCount[i] = 1 + rightCount[rightSide[i]];
  }
}

const leftCount = Array(n).fill(0);
for (let i = 0; i < n; i++) {
  if (leftSide[i] !== Infinity) {
    leftCount[i] = 1 + leftCount[leftSide[i]];
  }
}

const answer = [];

for (let i = 0; i < n; i++) {
  const total = leftCount[i] + rightCount[i];
  const left = Math.abs(leftSide[i] - i);
  const right = Math.abs(rightSide[i] - i);

  let min = Infinity;

  if (left <= right) {
    min = leftSide[i];
  } else {
    min = rightSide[i];
  }

  if (min === Infinity) {
    answer.push(`${total}`);
  } else {
    answer.push(`${total} ${min + 1}`);
  }
}

console.log(answer.join("\n"));
