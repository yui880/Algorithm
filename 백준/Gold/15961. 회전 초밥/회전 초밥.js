const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, d, k, c] = input.shift().split(" ").map(Number);
const sushi = input.map(Number);

let count = 0;

let left = 0;
let right = 0;
let max = 0;

const visited = Array(3001).fill(0);

let cnt = 0;

while (left < n) {
  right = right % n;

  if (count < k) {
    // 먹은적 없고 k개 안먹음
    if (visited[sushi[right]] === 0) cnt++;

    visited[sushi[right]]++;
    count++;
    right++;
  } else {
    max = Math.max(max, cnt + (visited[c] === 0 ? 1 : 0));

    visited[sushi[left]]--;
    if (visited[sushi[left]] === 0) cnt--;

    left++;
    count--;
  }
}

console.log(max);
