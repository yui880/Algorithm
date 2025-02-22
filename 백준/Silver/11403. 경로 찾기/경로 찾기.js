const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = +input.shift();
let arr = [];

for (const row of input) {
  arr.push(row.split(" ").map(Number));
}

for (let k = 0; k < n; k++) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (arr[i][k] && arr[k][j]) {
        arr[i][j] = 1;
      }
    }
  }
}

console.log(arr.map((v) => v.join(" ")).join("\n"));