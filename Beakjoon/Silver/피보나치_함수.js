// 1003
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Silver/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const T = Number(input.shift());

for (let i = 0; i < T; i++) {
    const N = Number(input[i]);

    // const dp = new Array(N + 1);
    // dp[0] = 0;
    // dp[1] = 1;

    const count = Array.from({ length: N + 2 }, () => new Array(2).fill(0));
    count[0][0] = 1;
    count[0][1] = 0;
    count[1][0] = 0;
    count[1][1] = 1;

    for (let j = 2; j <= N; j++) {
        // dp[i] = dp[i - 1] + dp[i - 2];
        count[j][0] = count[j - 1][0] + count[j - 2][0];
        count[j][1] = count[j - 1][1] + count[j - 2][1];
    }

    console.log(count[N].join(" "));
}
