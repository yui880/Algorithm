// 2504
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("");

const solution = () => {
    if (input[0] === ")" || input[0] === "]") {
        console.log(0);
        return;
    }

    const stack = [input[0]];
    const numStack = [];
    const countStack = [0];

    for (let i = 1; i < input.length; i++) {
        if (input[i] === "[" || input[i] === "(") {
            countStack.push(0);
            stack.push(input[i]);
        } else if (stack[stack.length - 1] === "[" && input[i] === "]") {
            stack.pop();
            let count = countStack.pop();
            let sum = 0;

            if (count === 0) numStack.push(3);
            else {
                while (count--) {
                    sum += numStack.pop();
                }
                numStack.push(sum * 3);
            }
            if (countStack.length) countStack[countStack.length - 1] += 1;
            else countStack[0] = 1;
        } else if (stack[stack.length - 1] === "(" && input[i] === ")") {
            stack.pop();
            let count = countStack.pop();
            let sum = 0;

            if (count === 0) numStack.push(2);
            else {
                while (count--) {
                    sum += numStack.pop();
                }
                numStack.push(sum * 2);
            }
            if (countStack.length) countStack[countStack.length - 1] += 1;
            else countStack[0] = 1;
        } else {
            console.log(0);
            return;
        }
    }
    if (stack.length) console.log(0);
    else console.log(numStack.reduce((acc, cur) => acc + cur, 0));
};

solution();

const stack = [];
let plus = 1;
let answer = 0;

for (let i = 0; i < input.length; i++) {
    if (input[i] === "(") {
        stack.push(input[i]);
        plus *= 2;
    }
    if (input[i] === "[") {
        stack.push(input[i]);
        plus *= 3;
    }
    if (input[i] === ")") {
        if (!stack.length || stack[stack.length - 1] !== "(") {
            answer = 0;
            break;
        }
        if (input.length && input[i - 1] === "(") {
            answer += plus;
        }
        stack.pop();
        plus /= 2;
    }
    if (input[i] === "]") {
        if (!stack.length || stack[stack.length - 1] !== "[") {
            answer = 0;
            break;
        }
        if (input.length && input[i - 1] === "[") {
            answer += plus;
        }
        stack.pop();
        plus /= 3;
    }
}

stack.length > 0 ? console.log(0) : console.log(answer);
