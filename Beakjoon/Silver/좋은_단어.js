// 3986
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Silver/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input[0]);
let answer = 0;

for (let i = 1; i <= N; i++) {
    const str = [...input[i]];
    const stack = [str[0]];

    for (let j = 1; j < str.length; j++) {
        if (stack[stack.length - 1] === "A" && str[j] === "A") stack.pop();
        else if (stack[stack.length - 1] === "B" && str[j] === "B") stack.pop();
        else stack.push(str[j]);
    }

    if (stack.length === 0) answer++;
}

console.log(answer);
