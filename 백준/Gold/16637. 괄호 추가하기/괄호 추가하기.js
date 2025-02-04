const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = Number(input[0]);
const list = input[1].split("");

const len = Math.ceil(n / 2);
const operators = list.filter((_, i) => i % 2 === 1);
const nums = list.filter((_, i) => i % 2 === 0).map(Number);

const calc = (operator, a, b) => {
  if (operator === "+") return a + b;
  if (operator === "*") return a * b;
  if (operator === "-") return a - b;
};

let maxResult = -Infinity;

const dfs = (index, currentResult) => {
  if (index >= operators.length) {
    maxResult = Math.max(maxResult, currentResult);
    return;
  }

  // 1. 괄호 없이 현재 연산 수행
  dfs(index + 1, calc(operators[index], currentResult, nums[index + 1]));

  // 2. 괄호를 쳐서 다음 연산을 먼저 수행
  if (index + 1 < operators.length) {
    const nextResult = calc(operators[index + 1], nums[index + 1], nums[index + 2]);
    dfs(index + 2, calc(operators[index], currentResult, nextResult));
  }
};

// DFS 시작
dfs(0, nums[0]);

console.log(maxResult);
