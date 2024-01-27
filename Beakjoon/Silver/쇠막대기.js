// 10799
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Silver/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("");

const stack = [input[0]];
let answer = 0;
for (let i = 1; i < input.length; i++) {
    if (input[i] === "(") stack.push(input[i]);
    else if (stack[stack.length - 1] === "(" && input[i] === ")") {
        stack.pop();
        if (input[i - 1] === "(") {
            answer += stack.length;
        } else {
            answer += 1;
        }
    }
}

console.log(answer);
