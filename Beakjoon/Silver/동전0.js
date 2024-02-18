// 11047
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Silver/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let [N, K] = input.shift().split(" ").map(Number);
const coins = input.map(Number);
let answer = 0;

for (let i = N - 1; i >= 0; i--) {
    answer += Math.floor(K / coins[i]);
    K %= coins[i];
}

console.log(answer);
