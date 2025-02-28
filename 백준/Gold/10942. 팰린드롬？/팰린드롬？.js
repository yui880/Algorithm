const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = +input.shift();
const nums = input.shift().split(" ").map(Number);
const m = +input.shift();
const questions = input.map((str) => str.split(" ").map(Number));

const dp = Array(n + 1)
  .fill()
  .map(() => Array(n + 1).fill(-1));

for (let i = 1; i <= n; i++) {
  dp[i][i] = 1;
}

for (let i = 1; i < n; i++) {
  if (nums[i - 1] === nums[i]) {
    dp[i][i + 1] = 1;
  } else {
    dp[i][i + 1] = 0;
  }
}

// 해당 순서대로 접근하면 길이가 3->4->5 증가하면서 찾게돼서 이전에 필요한 범위가 팰린드롬인지 구해져있음

for (let len = 3; len <= n; len++) {
  // 길이
  for (let start = 1; start <= n - len + 1; start++) {
    // 시작점
    const end = start + len - 1;
    // palindrome의 특성: 양 끝 문자가 같고, 내부 문자열도 palindrome이어야 함
    if (nums[start - 1] === nums[end - 1] && dp[start + 1][end - 1] === 1) {
      dp[start][end] = 1;
    } else {
      dp[start][end] = 0;
    }
  }
}

const answer = questions.map(([s, e]) => dp[s][e]);
console.log(answer.join("\n"));
