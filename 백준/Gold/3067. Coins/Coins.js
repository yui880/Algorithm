const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const T = +input.shift();
let idx = 0;

for (let i = 0; i < T; i++) {
  const n = +input[idx++];
  const coins = [0, ...input[idx++].split(" ").map(Number)];
  const target = +input[idx++];

  const dp = Array.from({ length: coins.length }, () => Array(target + 1).fill(0));
  dp[0][0] = 1;

  for (let j = 1; j < coins.length; j++) {
    for (let k = 0; k <= target; k++) {
      dp[j][k] += dp[j - 1][k];
      if (k - coins[j] >= 0) dp[j][k] += dp[j][k - coins[j]];
    }
  }

  console.log(dp[coins.length - 1][target]);
}
