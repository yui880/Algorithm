const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let idx = 0;
const t = +input[idx++];

for (let i = 0; i < t; i++) {
  const [n, k] = input[idx++].split(" ").map(Number);
  const buildTime = input[idx++].split(" ").map(Number);
  const list = [];

  for (let j = 0; j < k; j++) {
    list.push(input[idx++].split(" ").map(Number));
  }

  const w = +input[idx++];

  const indegree = Array(n + 1).fill(0);
  const graph = Array.from({ length: n + 1 }, () => []);
  const time = Array(n + 1).fill(0);

  for (const [s, e] of list) {
    graph[s].push(e);
    indegree[e]++;
  }

  const queue = [];

  indegree.forEach((v, i) => {
    if (i !== 0 && v === 0) {
      queue.push(i);
      time[i] = buildTime[i - 1];
    }
  });

  let id = 0;

  while (queue.length > id) {
    const cur = queue[id++];

    if (!graph[cur]) continue;

    for (const next of graph[cur]) {
      indegree[next]--;
      time[next] = Math.max(time[next], time[cur] + buildTime[next - 1]);

      if (indegree[next] === 0) {
        queue.push(next);
      }
    }
  }

  console.log(time[w]);
}
