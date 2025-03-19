const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, a, b] = input[0].split(" ").map(Number);

const arr = Array(n).fill(1);

if (a + b > n + 1) {
  console.log(-1);
  process.exit(0);
}

if (a <= b) {
  if (a === 1) {
    arr[0] = b;

    let min = 1;
    for (let i = n - 1; i > n - b; i--) {
      arr[i] = min;
      min++;
    }
  } else {
    let aCount = a - 2;
    let max = Math.max(a - 1, 1);

    for (let i = n - b - 1; i >= n - b - aCount; i--) {
      arr[i] = max;
      if (max > 1) max--;
    }

    let min = 1;
    for (let i = n - 1; i >= n - b; i--) {
      arr[i] = min;
      min++;
    }
  }
} else {
  let aCount = a;
  let max = a;

  for (let i = n - b; i >= b - aCount; i--) {
    arr[i] = max;
    if (max > 1) max--;
  }

  let min = 1;
  for (let i = n - 1; i > n - b; i--) {
    arr[i] = min;
    min++;
  }
}
console.log(arr.join(" "));
