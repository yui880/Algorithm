const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = Number(input[0]);

const arr = [];
const visited = Array(n + 1).fill(false);
let answer = [];

const backTracking = () => {
  if (arr.length === n) {
    answer.push(arr.join(" "));
    return;
  }

  for (let i = 1; i <= n; i++) {
    if (!visited[i]) {
      arr.push(i);
      visited[i] = true;

      backTracking();

      visited[i] = false;
      arr.pop();
    }
  }
};

backTracking();
console.log(answer.join("\n"));
