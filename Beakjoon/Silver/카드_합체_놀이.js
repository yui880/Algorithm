// 15903
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Silver/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const list = input[1].split(" ").map(BigInt);

for (let i = 0; i < M; i++) {
    const first = Math.min(...list);
    const firstIdx = list.indexOf(first);

    const second = Math.min(...list.filter((_, k) => k != firstIdx));
    const secondIdx = list.findIndex((v, k) => v === second && k !== firstIdx);

    list[firstIdx] = first + second;
    list[secondIdx] = first + second;
}

const answer = list.reduce((acc, cur) => acc + cur, 0);

console.log(answer);
