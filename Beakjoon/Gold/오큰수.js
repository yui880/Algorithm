// 17298
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input[0]);
const numbers = input[1].split(" ").map(Number);

const stack = [];
const answer = [];
for (let i = N - 1; i >= 0; i--) {
    while (stack.length && stack[stack.length - 1] <= numbers[i]) {
        stack.pop();
    }

    stack.length === 0 ? answer.push(-1) : answer.push(stack[stack.length - 1]);
    stack.push(numbers[i]);
}

console.log(answer.reverse().join(" "));
