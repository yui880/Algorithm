// 13300
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Bronze/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, K] = input.shift().split(" ").map(Number);
const arr = Array.from({ length: 2 }, () => new Array(6).fill(0));

input.forEach((str) => {
    const [s, y] = str.split(" ").map(Number);
    arr[s][y - 1] = arr[s][y - 1] + 1;
});

let count = 0;
arr.forEach((list) => {
    list.forEach((num) => {
        count += Math.ceil(num / K);
    });
});

console.log(count);
