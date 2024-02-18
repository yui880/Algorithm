// 1931
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Silver/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input.shift());
const meetings = input.map((str) => str.split(" ").map(Number));
meetings.sort((a, b) => {
    if (a[1] < b[1]) return -1;
    else if (a[1] > b[1]) return 1;
    else {
        if (a[0] < b[0]) return -1;
        else return 1;
    }
});

let answer = 0;
let endTime = 0;
for (let i = 0; i < N; i++) {
    const [start, end] = meetings[i];
    if (endTime <= start) {
        answer++;
        endTime = end;
    }
}

console.log(answer);
