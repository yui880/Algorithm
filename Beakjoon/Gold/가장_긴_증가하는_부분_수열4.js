// 14002
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input[0]);
const list = input[1].split(" ").map(Number);

const dp = Array.from({ length: N }, () => new Array(2));

list.forEach((val, i) => {
    dp[i][0] = 1;
    dp[i][1] = `${val}`;
});

for (let i = 1; i < N; i++) {
    for (let j = 0; j < i; j++) {
        if (list[i] > list[j]) {
            dp[i][0] = Math.max(dp[i][0], dp[j][0] + 1);
            if (dp[i][0] === dp[j][0] + 1) {
                dp[i][1] = dp[j][1] + ` ${list[i]}`;
            }
        }
    }
}

let maxIndex = 0;
for (let i = 1; i < N; i++) {
    if (dp[i][0] > dp[maxIndex][0]) {
        maxIndex = i;
    }
}

console.log(dp[maxIndex].join("\n"));
