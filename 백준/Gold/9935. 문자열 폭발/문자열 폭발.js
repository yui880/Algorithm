const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const target = input[0];
const bomb = input[1];

const stack = [];

for (let i = 0; i < target.length; i++) {
  stack.push(target[i]);

  if (stack.length < bomb.length) {
    continue;
  }

  let flag = true;
  for (let j = 0; j < bomb.length; j++) {
    if (stack[stack.length - bomb.length + j] !== bomb[j]) {
      flag = false;
      break;
    }
  }

  if (flag) {
    stack.splice(stack.length - bomb.length, bomb.length);
  }
}

const result = stack.join("");
result === "" ? console.log("FRULA") : console.log(result);
