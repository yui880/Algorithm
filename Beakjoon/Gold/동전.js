// 9084
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const T = Number(input.shift());
for (let i = 0; i < T; i++) {
    const N = Number(input.shift());
    const coins = input.shift().split(" ").map(Number);
    const target = Number(input.shift());

    const dp = new Array(target + 1).fill(0);

    for (let j = 0; j < N; j++) {
        const coin = coins[j];
        dp[coin] += 1;
        for (let k = coin; k <= target; k++) {
            dp[k] += dp[k - coin];
        }
        console.log(dp);
    }

    console.log(dp[target]);
}
