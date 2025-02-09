const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m] = input.shift().split(" ").map(Number);
const list = input.map((str) => str.split(" ").map(Number));

const dp = Array.from({ length: n }, () => Array(n).fill(false));

for (let i = 0; i < n; i++) {
  dp[i][i] = true;
}

list.forEach(([s, e]) => {
  dp[s - 1][e - 1] = true;
});

for (let k = 0; k < n; k++) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      dp[i][j] = dp[i][j] || (dp[i][k] && dp[k][j]);
    }
  }
}

let answer = 0;

for (let i = 0; i < n; i++) {
  const rowCount = dp[i].filter((val) => val === true).length;
  const colCount =
    dp.reduce((acc, cur) => {
      return acc + cur[i];
    }, 0) - 1;

  if (rowCount + colCount === n) answer++;
}

console.log(answer);
