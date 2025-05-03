const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = +input.shift();

const obj = {};

for (const cur of input) {
  if (cur in obj) obj[cur]++;
  else obj[cur] = 1;
}

const list = Object.entries(obj).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));

console.log(list[0][0]);
