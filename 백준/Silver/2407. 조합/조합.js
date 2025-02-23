const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);

function combination(n, m) {
  if (n < m) return 0n;

  m = Math.min(m, n - m);
  let numerator = 1n;
  let denominator = 1n;

  for (let i = 0; i < m; i++) {
    numerator *= BigInt(n - i);
    denominator *= BigInt(i + 1);
  }

  return numerator / denominator;
}

console.log(combination(n, m).toString());
