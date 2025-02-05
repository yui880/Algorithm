const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, s] = input[0].split(" ").map(Number);
const list = input[1].split(" ").map(Number);

let left = 0;
let right = 0;
let total = list[0];

let min = Infinity;
if (total >= s) min = 1;

while (left < n && right < n) {
  if (total < s) {
    right++;
    total += list[right];
  } else {
    while (total >= s) {
      min = Math.min(min, right - left + 1);
      total -= list[left];
      left++;
    }
  }
}

console.log(min === Infinity ? 0 : min);
