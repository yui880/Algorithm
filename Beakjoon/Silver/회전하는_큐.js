// 1021
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Silver/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const list = Array.from({ length: N }, (_, i) => i + 1);
const numbers = input[1].split(" ").map(Number);
let answer = 0;

for (let i = 0; i < M; i++) {
    const targetIndex = list.indexOf(numbers[i]);

    if (targetIndex >= list.length / 2) {
        while (list[0] !== numbers[i]) {
            list.unshift(list.pop());
            answer++;
        }
    } else {
        while (list[0] !== numbers[i]) {
            list.push(list.shift());
            answer++;
        }
    }

    list.shift();
}

console.log(answer);
