const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m] = input.shift().split(" ").map(Number);
const list = input.map(Number).sort((a, b) => a - b);

const binarySearch = (start, end) => {
  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    let count = 1;
    let lastIndex = 0;

    for (let i = 1; i < list.length; i++) {
      if (list[lastIndex] + mid <= list[i]) {
        count++;
        lastIndex = i;
      }
    }

    if (m <= count) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return start - 1;
};

const answer = binarySearch(1, list[n - 1] - list[0] + 1);
console.log(answer);
