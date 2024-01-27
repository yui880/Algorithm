// 1406
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Silver/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const front = [...input[0]];
const back = [];
const len = Number(input[1]);

for (let i = 2; i < len + 2; i++) {
    const [command, s] = input[i].split(" ");

    if (command === "L") {
        if (front.length > 0) back.push(front.pop());
    } else if (command === "D") {
        if (back.length > 0) front.push(back.pop());
    } else if (command === "B") {
        if (front.length > 0) front.pop();
    } else {
        front.push(s);
    }
}

console.log([...front, ...back.reverse()].join(""));
