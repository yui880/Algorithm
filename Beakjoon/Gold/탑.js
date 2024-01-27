// 2493
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = parseInt(input.shift());
const towers = input.shift().split(" ").map(Number);

const stack = [];
const answer = [];

for (let i = 0; i < N; i++) {
    const item = {
        index: i + 1,
        value: towers[i],
    };

    if (i === 0) {
        stack.push(item);
        answer.push(0);
        continue;
    }

    while (stack.length > 0 && stack[stack.length - 1].value < towers[i]) {
        stack.pop();
    }

    if (stack.length === 0) {
        answer.push(0);
    } else {
        answer.push(stack[stack.length - 1].index);
    }
    stack.push(item);
}

console.log(answer.join(" "));
