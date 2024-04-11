// 5557
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

// 나오는 숫자 20 이하
// 만들 수 있는 올바른 등식의 개수
// 무조건 마지막 두 숫자 사이에 등호를 넣음

const N = Number(input.shift());
const list = input.shift().split(" ").map(Number);

const dp = Array.from({ length: N - 1 }, () => new Array(21).fill(BigInt(0)));
// dp[i][j] = i번째 숫자까지 확인했을 때, j값을 만들 수 있는 경우의 수

dp[0][list[0]] = BigInt(1);
for (let i = 1; i < N - 1; i++) {
    let cur = list[i];
    for (let j = 0; j <= 20; j++) {
        // 5557
        const fs = require("fs");
        const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
        let input = fs.readFileSync(filePath).toString().trim().split("\n");

        // 나오는 숫자 20 이하
        // 만들 수 있는 올바른 등식의 개수
        // 무조건 마지막 두 숫자 사이에 등호를 넣음

        const N = Number(input.shift());
        const list = input.shift().split(" ").map(Number);

        const dp = Array.from({ length: N - 1 }, () => new Array(21).fill(BigInt(0)));
        // dp[i][j] = i번째 숫자까지 확인했을 때, j값을 만들 수 있는 경우의 수

        dp[0][list[0]] = BigInt(1);
        for (let i = 1; i < N - 1; i++) {
            let cur = list[i];
            for (let j = 0; j <= 20; j++) {
                if (j + cur <= 20) dp[i][j] += dp[i - 1][j + cur];
                if (j - cur >= 0) dp[i][j] += dp[i - 1][j - cur];
            }
        }

        console.log(dp[N - 2][list[list.length - 1]].toString());
    }
}

console.log(dp[N - 2][list[list.length - 1]].toString());
