// 10093
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Bronze/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const [a, b] = input.shift().split(" ").map(Number);

const start = Math.min(a, b);
const end = Math.max(a, b);

console.log(end === start ? 0 : end - start - 1);
for (let i = start + 1; i < end; i++) {
    process.stdout.write(i + " ");
}
