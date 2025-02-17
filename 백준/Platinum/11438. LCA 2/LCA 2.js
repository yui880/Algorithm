const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

// input 처리하기
let id = 0;
const n = +input[id++];

const graph = Array.from({ length: n + 1 }, () => []);
while (id < n) {
  const [a, b] = input[id++].split(" ").map(Number);
  graph[a].push(b);
  graph[b].push(a);
}

const m = +input[id++];

const nodes = [];
while (input.length > id) {
  nodes.push(input[id++].split(" ").map(Number));
}

// 1. 직전 부모 노드와 깊이 구하기 (dfs)
const MAX_LOG = 17;

const parent = Array.from({ length: n + 1 }, () => Array(MAX_LOG).fill(-1));
const depth = Array(n + 1).fill(-1);

const dfs = (start) => {
  const stack = [];
  stack.push([start, 0]);

  depth[start] = 0;

  while (stack.length) {
    const [cur, level] = stack.pop();

    for (const next of graph[cur]) {
      if (depth[next] !== -1) continue;

      parent[next][0] = cur;
      depth[next] = level + 1;
      stack.push([next, level + 1]);
    }
  }
};

dfs(1);

// 2. 2^n 부모노드 구하기 (dp)
for (let i = 1; i < MAX_LOG; i++) {
  for (let a = 1; a <= n; a++) {
    if (parent[a][i - 1] !== -1) {
      parent[a][i] = parent[parent[a][i - 1]][i - 1];
    }
  }
}

// 3. 레벨 맞추고 2의 n씩 올라가면서 찾기
const LCA = (a, b) => {
  if (depth[a] < depth[b]) [a, b] = [b, a]; // 더 깊은게 a가 되도록 맞춤

  for (let i = MAX_LOG - 1; i >= 0; i--) {
    if (depth[a] - (1 << i) >= depth[b] && parent[a][i] !== -1) {
      // 2의 n제곱씩 올라가면서 logN 연산으로 올라가기 가능
      a = parent[a][i];
    }
  }

  if (a === b) return a;

  for (let i = MAX_LOG - 1; i >= 0; i--) {
    if (parent[a][i] !== parent[b][i] && parent[a][i] !== -1 && parent[b][i] !== -1) {
      a = parent[a][i];
      b = parent[b][i];
    }
  }

  return parent[a][0];
};

let answer = nodes.map(([a, b]) => LCA(a, b)).join("\n");
console.log(answer);
