const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = Number(input[0]);
const list = input[1].split(" ").map(Number);
let s = Number(input[2]);

const swap = (a, b) => {
  const temp = list[a];
  list[a] = list[b];
  list[b] = temp;
};

const findMaxIndex = (start, end) => {
  let maxIndex = start;

  for (let i = start + 1; i <= end; i++) {
    if (list[i] >= list[maxIndex]) maxIndex = i;
  }

  return maxIndex;
};

for (let i = 0; i < n && s > 0; i++) {
  const range = Math.min(n - 1, i + s);

  const maxIndex = findMaxIndex(i, range);

  if (maxIndex === i) continue;

  for (let j = maxIndex; j > i; j--) {
    swap(j, j - 1);
    s--;

    if (s === 0) break;
  }
}

console.log(list.join(" "));
