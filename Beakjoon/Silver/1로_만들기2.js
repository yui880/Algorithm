// 12852
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Silver/test.txt";
let input = fs.readFileSync(filePath).toString().trim();

const N = Number(input);
const dp = Array.from({ length: N + 1 }, () => new Array(2));
dp[1][0] = 0;
dp[1][1] = "";

for (let i = 2; i <= N; i++) {
    dp[i][0] = dp[i - 1][0] + 1;
    dp[i][1] = `${i} ` + dp[i - 1][1];

    if (i % 2 === 0) {
        if (dp[i][0] > dp[i / 2][0] + 1) {
            dp[i][0] = dp[i / 2][0] + 1;
            dp[i][1] = `${i} ` + dp[i / 2][1];
        }
    }
    if (i % 3 === 0) {
        if (dp[i][0] > dp[i / 3][0] + 1) {
            dp[i][0] = dp[i / 3][0] + 1;
            dp[i][1] = `${i} ` + dp[i / 3][1];
        }
    }
}

console.log(dp[N][0]);
console.log(dp[N][1] + "1");
