// 9461
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Silver/test.txt";
let input = fs.readFileSync(filePath).toString().trim();

const N = Number(input);
const dp = Array.from({ length: N + 1 }, () => new Array(10).fill(0));

for (let i = 1; i < 10; i++) {
    dp[1][i] = 1;
}

for (let i = 2; i <= N; i++) {
    for (let j = 0; j < 10; j++) {
        if (j === 0) {
            dp[i][j] = dp[i - 1][1] % 1_000_000_000;
        } else if (j === 9) {
            dp[i][j] = dp[i - 1][8] % 1_000_000_000;
        } else {
            dp[i][j] = (dp[i - 1][j - 1] + dp[i - 1][j + 1]) % 1_000_000_000;
        }
    }
}

const sum = dp[N].reduce((s, cur) => s + cur, 0);
console.log(sum % 1_000_000_000);
