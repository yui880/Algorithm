// 4949
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

while (true) {
    const str = input.shift();
    if (str === ".") break;
    const stack = [];

    [...str].forEach((s) => {
        if (s === "(" || s === "[") stack.push(s);
        if (s === ")") {
            if (stack.length && stack[stack.length - 1] === "(") stack.pop();
            else stack.push(s);
        }
        if (s === "]") {
            if (stack.length && stack[stack.length - 1] === "[") stack.pop();
            else stack.push(s);
        }
    });

    stack.length ? console.log("no") : console.log("yes");
}
