const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = +input.shift();
const list = input.map((v) => v - 1);

const dfs = (start) => {
  const queue = [];
  const visited = Array(n).fill(false);
  queue.push(start);
  visited[start] = true;

  let idx = 0;
  while (queue.length > idx) {
    const node = queue[idx++];
    const next = list[node];

    if (!visited[next]) {
      visited[next] = true;
      queue.push(next);
    } else {
      return next === start;
    }
  }

  return false;
};

let answer = [];

for (let i = 0; i < n; i++) {
  let flag = dfs(i);
  if (flag) answer.push(i + 1);
}

console.log(answer.length);
console.log(answer.join("\n"));
