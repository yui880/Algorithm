const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m, x] = input.shift().split(" ").map(Number);
const list = input.map((str) => str.split(" ").map(Number));

const graph = {};

for (const [s, e, t] of list) {
  graph[s] ? graph[s].push([e, t]) : (graph[s] = [[e, t]]);
}

const dijkstra = (start, end) => {
  const queue = [];
  queue.push([start, 0]);

  const distance = Array(n + 1).fill(Infinity);
  distance[start] = 0;

  let idx = 0;
  while (queue.length > idx) {
    const [cur, totalTime] = queue[idx++];

    if (totalTime > distance[cur]) continue;
    if (!graph[cur]) continue;

    for (const [next, nextTime] of graph[cur]) {
      const newTime = totalTime + nextTime;
      if (newTime < distance[next]) {
        distance[next] = newTime;
        queue.push([next, newTime]);
      }
    }
  }

  return distance[end];
};

let answer = 0;

for (let i = 1; i <= n; i++) {
  if (i === x) continue;

  const total = dijkstra(i, x) + dijkstra(x, i);
  answer = Math.max(answer, total);
}

console.log(answer);
