// 11057
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Silver/test.txt";
let input = fs.readFileSync(filePath).toString().trim();

const N = Number(input);
const dp = Array.from({ length: N + 1 }, () => Array(10).fill(0));
dp[1] = Array(10).fill(1);

let answer = 10;
for (let i = 2; i <= N; i++) {
    let sum = 0;
    for (let j = 1; j < 10; j++) {
        sum += dp[i - 1][j];
        dp[i][j] = sum % 10007;
        answer += dp[i][j];
    }
    answer %= 10007;
}

console.log(answer);
