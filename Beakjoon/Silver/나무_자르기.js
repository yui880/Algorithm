// 2805
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Silver/test.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const trees = input[1]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);

let start = 0;
let end = trees[trees.length - 1];
let max = 0;

while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    let sum = 0;

    for (let i = 0; i < trees.length; i++) {
        if (trees[i] > mid) {
            sum += trees[i] - mid;
        }
    }

    if (sum >= M) {
        max = Math.max(max, mid);
        start = mid + 1;
    } else {
        end = mid - 1;
    }
}

console.log(max);

// let start = trees[0];
// let end = trees[trees.length - 1];
// let mid = Math.floor((end - start) / 2);

// let max = 0;

// while (true) {
//     const sum = trees.reduce((s, cur) => {
//         if (cur > mid) {
//             return s + cur - mid;
//         }
//         return s;
//     }, 0);

//     if (sum > M) {
//         // 자른게 많으면
//         if (max < mid) max = mid;
//         else break;

//         let temp = mid;
//         mid = Math.floor((end - start) / 2) + start;
//         start = temp + 1;

//     } else if (sum < M) {
//         let temp = mid;
//         mid = Math.floor((end - start) / 2) + temp;
//         start = mid;
//     } else {
//         break;
//     }
// }
