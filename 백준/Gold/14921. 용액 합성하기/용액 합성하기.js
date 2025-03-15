const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = +input[0];
const list = input[1].split(" ").map(Number);

let left = 0;
let right = list.length - 1;
let min = Infinity;
let answer = 0;

let [s, e] = [-1, -1];

while (left < right) {
  const val = list[right] + list[left];

  if (Math.abs(val) < min) {
    min = Math.abs(val);
    answer = val;
    s = list[left];
    e = list[right];
  }

  if (val > 0) {
    right--;
  } else {
    left++;
  }
}

console.log(answer);
