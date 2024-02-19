// 11000
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input[0]);
const study = [];
for (let i = 1; i <= N; i++) {
    const [start, end] = input[i].split(" ").map(Number);
    study.push([start, 1]);
    study.push([end, -1]);
}

study.sort((a, b) => a[0] - b[0] || a[1] - b[1]);

let answer = 0;
let room = 0;

for (let i = 0; i < study.length; i++) {
    room += study[i][1];
    answer = Math.max(answer, room);
}

console.log(answer);

// 시간 초과
// const N = Number(input[0]);
// const study = [];
// for (let i = 1; i <= N; i++) {
//     study.push(input[i].split(" ").map(Number));
// }

// study.sort((a, b) => {
//     if (a[0] < b[0]) return -1;
//     else if (a[0] > b[0]) return 1;
//     else {
//         if (a[1] < a[1]) return -1;
//         else return 1;
//     }
// });

// const room = [0];
// for (let i = 0; i < N; i++) {
//     let flag = false;
//     for (let j = 0; j < room.length; j++) {
//         if (room[j] <= study[i][0]) {
//             room[j] = study[i][1];
//             flag = true;
//             break;
//         }
//     }
//     if (!flag) room.push(study[i][1]);
// }

// console.log(room.length);
