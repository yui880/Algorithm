const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = +input.shift();
const buildings = input.map((str) => str.split(" ").map(Number)).sort((a, b) => a[0] - b[0]);

const stack = [];
let count = 0;

for (let i = 0; i < n; i++) {
  while (stack.length > 0 && stack[stack.length - 1] >= buildings[i][1]) {
    const temp = stack.pop();
    if (temp > buildings[i][1]) count++;
  }

  stack.push(buildings[i][1]);
}

while (stack.length > 0) {
  const temp = stack.pop();
  if (temp > 0) count++;
}

console.log(count);
