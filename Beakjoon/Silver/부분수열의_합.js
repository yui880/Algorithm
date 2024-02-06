// 1182
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Silver/test.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, s] = input[0].split(" ").map(Number);
const list = input[1].split(" ").map(Number);

let answer = 0;
const recursion = (at, sum) => {
    if (at === n) return;
    sum += list[at];

    if (sum === s) {
        answer++;
    }

    recursion(at + 1, sum);
    recursion(at + 1, sum - list[at]);
};

recursion(0, 0);
console.log(answer);
