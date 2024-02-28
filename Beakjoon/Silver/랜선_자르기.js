// 1654
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Silver/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [K, N] = input.shift().split(" ").map(Number);
const list = input.map(Number);

let start = 0;
let mid = Math.max(...list);
let end = mid;

let answer = 0;

while (true) {
    let count = 0;
    list.forEach((v) => {
        count += Math.floor(v / mid);
    });

    if (count < N) {
        let temp = mid;
        mid = Math.floor((mid - start) / 2) + start;
        end = temp;
    } else {
        if (answer < mid) answer = mid;
        else break;

        let temp = mid;
        mid = Math.floor((end - mid) / 2) + temp;
        start = temp;
    }
}

console.log(answer);
