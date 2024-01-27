// 6198
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = parseInt(input.shift());
const buildings = input.map(Number);

const stack = [];
let answer = 0;

for (let i = 0; i < N; i++) {
    while (stack.length > 0 && stack[stack.length - 1] <= buildings[i]) {
        stack.pop();
    }
    // 현재 건물을 볼 수 있는 건물의 개수 더해주기
    answer += stack.length;

    stack.push(buildings[i]);
}

console.log(answer);
