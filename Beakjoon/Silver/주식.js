// 11501
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Silver/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

// let answerStr = "";
// const T = Number(input.shift());
// for (let i = 0; i < T; i++) {
//     const N = Number(input.shift());
//     let list = input.shift().split(" ").map(Number);

//     let answer = 0;
//     let start = 0;

//     while (true) {
//         if (start >= N) break;
//         let max = 0;
//         let maxIndex = 0;

//         for (let j = start; j < N; j++) {
//             if (max < list[j]) {
//                 max = list[j];
//                 maxIndex = j;
//             }
//         }

//         for (let j = start; j < maxIndex; j++) {
//             answer += max - list[j];
//         }
//         start = maxIndex + 1;
//     }

//     answerStr += `${answer}\n`;
// }

// console.log(answerStr);

let answerStr = "";
const T = Number(input.shift());
for (let i = 0; i < T; i++) {
    const N = Number(input.shift());
    let list = input.shift().split(" ").map(Number);

    let max = list[N - 1];
    let answer = 0;
    for (let j = N - 2; j >= 0; j--) {
        if (max >= list[j]) answer += max - list[j];
        else max = list[j];
    }
    answerStr += `${answer}\n`;
}

console.log(answerStr);
