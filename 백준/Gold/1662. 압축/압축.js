const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const str = input[0].split("");

const stack = [];

for (const ch of str) {
  if (ch !== ")") stack.push(ch);
  else {
    const tempStack = [];

    let cur = stack.pop();
    while (stack.length > 0 && cur !== "(") {
      tempStack.push(cur);
      cur = stack.pop();
    }

    const len = Number(stack.pop());

    let total = tempStack.reduce((acc, cur) => {
      if (typeof cur === "number") return acc + cur;
      else return acc + 1;
    }, 0);

    stack.push(total * len);
  }
}

let answer = stack.reduce((acc, cur) => {
  if (typeof cur === "number") return acc + cur;
  else return acc + 1;
}, 0);

console.log(answer);
