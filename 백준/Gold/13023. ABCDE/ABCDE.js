const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m] = input.shift().split(" ").map(Number);
const graph = Array.from({ length: n }, () => []);

input.forEach((str) => {
  const [s, e] = str.split(" ").map(Number);
  graph[s].push(e);
  graph[e].push(s);
});

const bfs = (start) => {
  const queue = [];
  queue.push([start, 0, 1 << start]);

  let idx = 0;
  while (queue.length > idx) {
    const [cur, count, visited] = queue[idx++];

    if (graph[cur].length === 0) return false;
    for (const next of graph[cur]) {
      if ((visited & (1 << next)) === 0) {
        if (count + 1 === 4) return true;
        queue.push([next, count + 1, visited | (1 << next)]);
      }
    }
  }

  return false;
};

let answer = 0;

for (let i = 0; i < n; i++) {
  const flag = bfs(i);

  if (flag) {
    answer = 1;
    break;
  }
}

console.log(answer);
