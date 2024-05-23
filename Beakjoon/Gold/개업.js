// 13910
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input.shift());
const list = input.map((str) => str.split(" ").map(Number));

const arr = new Array(4).fill(false);
arr[1] = true;

list.forEach(([f, s]) => {
    let temp = arr[f];
    arr[f] = arr[s];
    arr[s] = temp;
});

let flag = false;
arr.forEach((val, i) => {
    if (val) {
        console.log(i);
        flag = true;
    }
});

if (!flag) console.log(-1);

// const [N, M] = input.shift().split(" ").map(Number);
// const tool = input.shift().split(" ").map(Number);

// const dp = new Array(N + 1).fill(Infinity);
// dp[0] = 0;

// for (let i = 0; i <= N; i++) {
//     for (let j = 0; j < M; j++) {
//         dp[i + tool[j]] = Math.min(dp[i + tool[j]], dp[i] + 1);

//         for (let k = j + 1; k < M; k++) {
//             const sum = tool[j] + tool[k];
//             dp[i + sum] = Math.min(dp[i + sum], dp[i] + 1);
//         }
//     }
// }

// if (dp[N] === Infinity) console.log(-1);
// else console.log(dp[N]);
