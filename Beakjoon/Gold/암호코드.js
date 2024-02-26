// 2011
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim();

const p = input.split("").map(Number);

let flag = false;
const dp = Array(p.length + 1).fill(0);

if (p[0] === 0) flag = true;

dp[0] = 1;
dp[1] = 1;

for (let i = 2; i <= p.length; i++) {
    if (p[i - 1] != 0) {
        dp[i] += dp[i - 1] % 1000000;
    }

    let temp = p[i - 2] * 10 + p[i - 1];
    if (temp >= 10 && temp <= 26) {
        // 두자리 숫자 가능하면
        dp[i] += dp[i - 2] % 1000000;
    }
}

if (flag) console.log(0);
else console.log(dp[p.length] % 1000000);
