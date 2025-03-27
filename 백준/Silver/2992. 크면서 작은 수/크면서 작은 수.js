const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim();

const list = input.split("").map(Number).sort((a, b) => a - b);
const arr = Array(list.length);
const visited = Array(list.length).fill(false);
const results = [];

const backTracking = (count) => {
  if (count === list.length) {
    results.push(+arr.join(""));
    return;
  }

  for (let i = 0; i < list.length; i++) {
    if (visited[i]) continue;
    if (i > 0 && list[i] === list[i - 1] && !visited[i - 1]) continue; // 중복 방지

    visited[i] = true;
    arr[count] = list[i];
    backTracking(count + 1);
    visited[i] = false;
  }
};

backTracking(0);

const current = +input;
const index = results.indexOf(current);
console.log(index !== -1 && index + 1 < results.length ? results[index + 1] : 0);
