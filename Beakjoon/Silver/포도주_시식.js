// 2156
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Silver/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input.shift());
const list = input.map(Number);

const solution = () => {
    if (N === 1) {
        console.log(list[0]);
        return;
    }

    const dp = Array.from({ length: N }, () => new Array(3));

    dp[0][0] = 0;
    dp[0][1] = list[0];
    dp[0][2] = 0;
    dp[1][0] = list[0];
    dp[1][1] = list[1];
    dp[1][2] = list[0] + list[1];

    let max = list[0] + list[1];

    for (let i = 2; i < N; i++) {
        dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1], dp[i - 1][2], dp[i - 2][2], dp[i - 2][0], dp[i - 2][1]);
        dp[i][1] = Math.max(dp[i - 2][0], dp[i - 2][1], dp[i - 2][2]) + list[i];
        dp[i][2] = dp[i - 1][1] + list[i];

        if (dp[i][0] > max) max = dp[i][0];
        if (dp[i][1] > max) max = dp[i][1];
        if (dp[i][2] > max) max = dp[i][2];
    }

    console.log(max);
};

solution();
