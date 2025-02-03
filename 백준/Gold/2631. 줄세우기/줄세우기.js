const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = Number(input.shift());
const list = input.map(Number);

const dp = Array(n);

const binarySearch = (left, right, target) => {
  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    if (dp[mid] > target) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return left;
};

dp[0] = list[0];
let j = 0; // dp의 길이

for (let i = 1; i < n; i++) {
  if (list[i] > dp[j]) {
    dp[j + 1] = list[i];
    j += 1;
  } else {
    let idx = binarySearch(0, j, list[i]); // 현재 값 dp 어디에 넣어야 하는지
    dp[idx] = list[i];
  }
}

const LIS = j + 1;

console.log(n - LIS);
