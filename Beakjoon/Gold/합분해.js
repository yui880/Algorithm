// 2225
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim();

const [N, K] = input.split(" ").map(Number);

const dp = Array.from({ length: K + 1 }, () => new Array(N + 1).fill(0));

for (let i = 0; i <= N; i++) {
    // 0~N까지라 0부터 초기화해야함
    dp[1][i] = 1;
}

for (let i = 1; i <= K; i++) {
    for (let j = 0; j <= N; j++) {
        for (let k = 0; k <= j; k++) {
            dp[i][j] += dp[i - 1][j - k];
            dp[i][j] %= 1_000_000_000;
        }
    }
}

console.log(dp[K][N]);
