const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const dna = input[0];
const n = dna.length;

const dp = Array.from({ length: n }, () => Array(n).fill(0));

const to = {};
to["a"] = "t";
to["g"] = "c";

for (let len = 1; len <= n; len++) {
  for (let i = 0; i < n - len; i++) {
    let j = len + i;

    if ((dna[i] === "a" || dna[i] === "g") && dna[j] === to[dna[i]]) {
      dp[i][j] = dp[i + 1][j - 1] + 2;
    }

    for (let k = i; k < j; k++) {
      dp[i][j] = Math.max(dp[i][k] + dp[k + 1][j], dp[i][j]);
    }
  }
}

console.log(Math.max(...dp.flat(2)));
