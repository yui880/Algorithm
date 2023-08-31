//14501

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Silver/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = parseInt(input.shift());
const arr = input.map((i) => i.split(" ").map(Number));

const resign = () => {
    const dp = new Array(n + 1).fill(0);
    for (let i = 0; i < n; i++) {
        const [t, p] = arr[i];
        if (i + t <= n) {
            // i번째 날에 일을 했으면
            dp[i + t] = Math.max(dp[i + t], dp[i] + p);
        }
        // i번째 날에 일을 하지 않았으면
        dp[i + 1] = Math.max(dp[i], dp[i + 1]);
    }

    return Math.max(...dp);
};

console.log(resign());
