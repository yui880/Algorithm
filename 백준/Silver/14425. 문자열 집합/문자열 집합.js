const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let id = 0;
const [n, m] = input[id++].split(" ").map(Number);
const s = new Set(input.slice(id, id + n));
const check = input.slice(id + n);

let count = 0;
for (const str of check) {
  if (s.has(str)) count++;
}

console.log(count);
