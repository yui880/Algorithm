// 2170
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input[0]);
const lines = [];

for (let i = 1; i <= N; i++) {
    lines.push(input[i].split(" ").map(Number));
}

lines.sort((a, b) => a[0] - b[0] || a[1] - b[1]);

const newLines = [lines[0]];
for (let j = 1; j < lines.length; j++) {
    const [s2, e2] = lines[j];

    let flag = false;
    for (let i = 0; i < newLines.length; i++) {
        const [s1, e1] = newLines[i];

        if (s2 <= e1) {
            let newStart = s1 < s2 ? s1 : s2;
            let newEnd = e1 < e2 ? e2 : e1;
            newLines[i] = [newStart, newEnd];
            flag = true;
            break;
        }
    }

    if (!flag) newLines.push([s2, e2]);
}

const answer = newLines.reduce((sum, [s, e]) => {
    return sum + (BigInt(e) - BigInt(s));
}, BigInt(0));

console.log(answer.toString());

// 2번째 방법
// let answer = 0;
let last = -Infinity;
for (let i = 0; i < lines.length; i++) {
    const [s, e] = lines[i];

    if (last <= s) {
        answer += e - s;
        last = e;
    } else if (s <= last && e >= last) {
        answer += e - last;
        last = e;
    }
}

console.log(answer);
