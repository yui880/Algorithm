const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const first = [...input[0]];
const second = [...input[1]];

const dp = Array.from({ length: first.length + 1 }, () => Array(second.length + 1).fill(0));

for (let i = 0; i < first.length; i++) {
  for (let j = 0; j < second.length; j++) {
    if (first[i] === second[j]) {
      dp[i + 1][j + 1] = dp[i][j] + 1;
    } else {
      dp[i + 1][j + 1] = Math.max(dp[i + 1][j], dp[i][j + 1]);
    }
  }
}

let answer = "";
let i = first.length;
let j = second.length;

while (i > 0 && j > 0 && dp[i][j] !== 0) {
  const up = dp[i - 1][j];
  const left = dp[i][j - 1];

  if (up === dp[i][j]) i--;
  else if (left === dp[i][j]) j--;
  else {
    answer = first[i - 1] + answer;
    i--;
    j--;
  }
}

console.log(answer);
