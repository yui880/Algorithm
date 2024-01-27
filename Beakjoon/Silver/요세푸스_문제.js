// 1158
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Silver/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, K] = input[0].split(" ").map(Number);

let queue = Array.from({ length: N }, (_, i) => i + 1);

const answer = [];
let count = 1;

while (queue.length) {
    const num = queue.shift();

    if (count % K === 0) {
        answer.push(num);
    } else {
        queue.push(num);
    }
    count++;
}

console.log(`<${answer.join(", ")}>`);
