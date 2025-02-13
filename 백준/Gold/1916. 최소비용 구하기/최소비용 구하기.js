const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let id = 0;
const n = +input[id++];
const m = +input[id++];
const graph = Array.from({ length: n + 1 }, () => []);

while (id < m + 2) {
  const [s, e, w] = input[id++].split(" ").map(Number);
  graph[s].push([e, w]);
}

const [a, b] = input[id++].split(" ").map(Number);

const dijkstra = (start, end) => {
  const queue = [];
  const visited = Array(n + 1).fill(Infinity);

  queue.push([start, 0]);
  visited[start] = 0;

  let idx = 0;
  while (queue.length > idx) {
    const [node, weight] = queue[idx++];
    if (weight > visited[node]) continue;

    if (!graph[node]) continue;
    for (const [next, nw] of graph[node]) {
      if (visited[next] > weight + nw) {
        visited[next] = weight + nw;
        queue.push([next, weight + nw]);
      }
    }
  }

  return visited[end];
};

console.log(dijkstra(a, b));
