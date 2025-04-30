const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m, r] = input.shift().split(" ").map(Number);
const graph = Array.from({ length: n + 1 }, () => []);

input.forEach((str) => {
  const [s, e] = str.split(" ").map(Number);
  graph[s].push(e);
  graph[e].push(s);
});

for (let i = 1; i <= n; i++) {
  graph[i].sort((a, b) => b - a);
}

const bfs = (start) => {
  const visited = Array(n + 1).fill(0);
  const queue = [];

  let order = 1;
  visited[start] = order++;
  queue.push(start);

  let idx = 0;
  while (queue.length > idx) {
    const current = queue[idx++];

    for (const next of graph[current]) {
      if (visited[next] === 0) {
        visited[next] = order++;
        queue.push(next);
      }
    }
  }

  return visited;
};

const visitOrder = bfs(r);

for (let i = 1; i <= n; i++) {
  console.log(visitOrder[i] || 0);
}
