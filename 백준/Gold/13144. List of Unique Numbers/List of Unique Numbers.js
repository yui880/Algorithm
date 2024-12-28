const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = +input[0];
const list = input[1].split(" ").map(Number);

let start = 0;
let end = 0;

const used = new Set();
let count = 0;

for (start; start < list.length; start++) {
  while (end < list.length && !used.has(list[end])) {
    used.add(list[end]);
    end++;
  }
  count += end - start;
  used.delete(list[start]);
}

console.log(count);