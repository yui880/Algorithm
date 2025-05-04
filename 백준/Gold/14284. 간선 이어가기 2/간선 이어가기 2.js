const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m] = input.shift().split(" ").map(Number);
const [s, t] = input.pop().split(" ").map(Number);
const graph = Array.from({ length: n + 1 }, () => []);

const list = input.map((str) => str.split(" ").map(Number));

for (const [a, b, w] of list) {
  graph[a].push([b, w]);
  graph[b].push([a, w]);
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

const answer = dijkstra(s, t);
console.log(answer === Infinity ? -1 : answer);
