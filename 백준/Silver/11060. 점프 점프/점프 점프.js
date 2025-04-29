const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = +input[0];
const list = input[1].split(" ").map(Number);

const visited = Array(n).fill(Infinity);

const bfs = (start) => {
  visited[start] = 0;

  const queue = [];
  queue.push([start, 0]);

  let idx = 0;
  while (queue.length > idx) {
    const [cur, d] = queue[idx++];
    if (visited[cur] < d) continue;

    for (let i = 1; i <= list[cur]; i++) {
      const next = cur + i;

      if (visited[next] > d + 1) {
        visited[next] = d + 1;
        queue.push([next, d + 1]);
      }
    }
  }
};

bfs(0);

if (visited[n - 1] === Infinity) console.log(-1);
else console.log(visited[n - 1]);
