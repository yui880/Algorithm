// 12851
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Silver/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = parseInt(input.shift());
for (let i = 0; i < N; i++) {
    const str = input.shift().split("");
    const stack = [str[0]];

    for (let j = 1; j < str.length; j++) {
        if (stack[stack.length - 1] === "(" && str[j] === ")") stack.pop();
        else stack.push(str[j]);
    }

    console.log(stack.length ? "NO" : "YES");
}
