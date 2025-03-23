const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = +input[0];
const list = input[1].split(" ").map(Number);

const visited = Array(n).fill(false);
const arr = Array(n);

const calcSum = (arr) => {
  let sum = 0;

  for (let i = 0; i < n - 1; i++) {
    sum += Math.abs(arr[i] - arr[i + 1]);
  }

  return sum;
};

let answer = 0;

const backTracking = (count) => {
  if (count === n) {
    const sum = calcSum(arr);

    if (sum > answer) answer = sum;

    return;
  }

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      visited[i] = true;
      arr[count] = list[i];
      backTracking(count + 1);
      visited[i] = false;
    }
  }
};

backTracking(0);
console.log(answer);
