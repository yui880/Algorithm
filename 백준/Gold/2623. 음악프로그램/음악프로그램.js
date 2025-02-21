const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m] = input.shift().split(" ").map(Number);
const graph = Array.from({ length: n + 1 }, () => []);
const indegree = Array(n + 1).fill(0);

const orderList = input.map((str) => {
  const temp = str.split(" ").map(Number);

  for (let i = 1; i < temp.length - 1; i++) {
    graph[temp[i]].push(temp[i + 1]);
    indegree[temp[i + 1]]++;
  }

  return temp;
});

const answer = [];

const queue = [];
indegree.forEach((v, i) => {
  if (v === 0 && i !== 0) queue.push(i);
});

let idx = 0;
while (queue.length > idx) {
  const cur = queue[idx++];
  answer.push(cur);

  for (const next of graph[cur]) {
    indegree[next]--;

    if (indegree[next] === 0) queue.push(next);
  }
}

if (answer.length === n) console.log(answer.join("\n"));
else console.log(0);
