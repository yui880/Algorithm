const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m] = input.shift().split(" ").map(Number);

const graph = Array.from({ length: n + 1 }, () => []);
const indegree = Array(n + 1).fill(0);

input.forEach((str) => {
  const [s, e] = str.split(" ").map(Number);
  graph[s].push(e);
  indegree[e]++;
});

const answer = [];
const queue = [];

// 진입 차수 0인 요소 큐에 삽입
indegree.forEach((val, i) => {
  if (val === 0 && i !== 0) {
    queue.push(i);
  }
});

let idx = 0;
while (queue.length > idx) {
  const node = queue[idx++];
  answer.push(node);

  for (const next of graph[node]) {
    indegree[next]--;

    if (indegree[next] === 0) queue.push(next);
  }
}

console.log(answer.join(" "));
