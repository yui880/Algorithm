const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = +input.shift();
const list = input;

for (let i = 1; i <= list[0].length; i++) {
  let temp = new Set();

  for (let j = 0; j < list.length; j++) {
    temp.add(list[j].slice(-1 * i));
  }

  if (temp.size === n) {
    console.log(i);
    break;
  }
}
