const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = +input.shift();
const graph = Array.from({ length: n + 1 }, () => []);

input.map((str) => {
  const [s, e] = str.split(" ").map(Number);
  graph[s].push(e);
  graph[e].push(s);
});

const dp = Array.from({ length: n + 1 }, () => [-1, -1]);
const visited = Array(n + 1).fill(false);

const dfs = (node) => {
  visited[node] = true;
  dp[node][0] = 0; // 현재 노드가 얼리 어답터가 아님
  dp[node][1] = 1; // 현재 노드가 얼리 어답터임

  for (const child of graph[node]) {
    if (!visited[child]) {
      dfs(child);

      // 현재 노드가 얼리 어답터가 아니면, 모든 자식은 얼리 어답터여야 함
      dp[node][0] += dp[child][1];

      // 현재 노드가 얼리 어답터이면, 자식은 얼리 어답터이거나 아닐 수 있음
      dp[node][1] += Math.min(dp[child][0], dp[child][1]);
    }
  }
};

dfs(1);

const result = Math.min(dp[1][0], dp[1][1]);
console.log(result);
