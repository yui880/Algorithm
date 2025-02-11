const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = +input.shift();
const board = input.map((str) => str.split(" ").map(Number));
let answer = Infinity;

for (let first = 0; first < 3; first++) {
  const dp = Array.from({ length: n }, () => Array(3).fill(Infinity));
  dp[0][first] = board[0][first];

  for (let i = 1; i < n; i++) {
    const minValues = [
      Math.min(dp[i - 1][1], dp[i - 1][2]),
      Math.min(dp[i - 1][0], dp[i - 1][2]),
      Math.min(dp[i - 1][0], dp[i - 1][1]),
    ];

    for (let j = 0; j < 3; j++) {
      if (i === n - 1 && j === first) continue;
      dp[i][j] = minValues[j] + board[i][j];
    }
  }
  answer = Math.min(...dp[n - 1], answer);
}

console.log(answer);
