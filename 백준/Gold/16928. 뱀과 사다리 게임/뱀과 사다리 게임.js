const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m] = input.shift().split(" ").map(Number);
const ladder = {};
input.map((str) => {
  const [s, e] = str.split(" ").map(Number);
  ladder[s] = e;
});

const dijkstra = (start, end) => {
  const queue = [];
  const visited = Array(101).fill(Infinity);

  queue.push([start, 0]);
  visited[start] = 0;

  let idx = 0;
  while (queue.length > idx) {
    const [cur, count] = queue[idx++];

    if (count > visited[cur]) continue;

    for (let i = 1; i <= 6; i++) {
      const next = cur + i;
      if (next > 100) continue;

      if (ladder[next]) {
        const ladderNext = ladder[next];
        if (visited[ladderNext] > count + 1) {
          visited[ladderNext] = count + 1;
          queue.push([ladderNext, count + 1]);
        }
      } else {
        if (visited[next] > count + 1) {
          visited[next] = count + 1;
          queue.push([next, count + 1]);
        }
      }
    }
  }

  return visited[end];
};

console.log(dijkstra(1, 100));
