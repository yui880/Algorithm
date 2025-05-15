const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = +input[0];

if (n === 1) {
    console.log(0);
} else {
    let dp = Array(3).fill(0);
    dp[1] = 1;
    dp[2] = 1;
    
    for (let i = 2; i <= n; i++) {
        const newDp = Array(3).fill(0);
        for (let j = 0; j < 3; j++) {
            for (let k = 0; k <= 2; k++) {
                newDp[(j + k) % 3] += dp[j];
            }
        }
        dp = newDp;
    }
    
    console.log(dp[0]);
}