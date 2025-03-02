const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = +input.shift();
const graph = Array.from({ length: n + 1 }, () => []);
const indegree = Array(n + 1).fill(0);
const times = Array(n + 1).fill(0);
const dp = Array(n + 1).fill(0);

input.forEach((str, i) => {
  const [time, count, ...list] = str.split(" ").map(Number);
  const taskNum = i + 1;

  times[taskNum] = time;

  if (count > 0) {
    list.forEach((v) => {
      graph[v].push(taskNum);
      indegree[taskNum]++;
    });
  }
});

const queue = [];

for (let i = 1; i <= n; i++) {
  if (indegree[i] === 0) {
    queue.push(i);
    dp[i] = times[i];
  }
}

let idx = 0;
while (queue.length > idx) {
  const cur = queue[idx++];

  for (const next of graph[cur]) {
    dp[next] = Math.max(dp[next], dp[cur] + times[next]);
    indegree[next]--;

    if (indegree[next] === 0) {
      queue.push(next);
    }
  }
}

const answer = Math.max(...dp.slice(1));
console.log(answer);
