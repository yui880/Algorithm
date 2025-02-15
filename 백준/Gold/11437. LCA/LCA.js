const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let id = 0;
const n = +input[id++];

const list = Array.from({ length: n + 1 }, () => []);
while (id < n) {
  const [a, b] = input[id++].split(" ").map(Number);
  list[a].push(b);
  list[b].push(a);
}

const m = +input[id++];

const nodes = [];
while (input.length > id) {
  nodes.push(input[id++].split(" ").map(Number));
}

const parent = Array(n + 1).fill(0);
const depth = Array(n + 1).fill(0);

const dfs = (start) => {
  const stack = [];
  const visited = Array(n + 1).fill(false);
  stack.push([start, 0]);

  parent[start] = start;
  visited[start] = true;
  depth[start] = 0;

  while (stack.length) {
    const [cur, level] = stack.pop();

    for (const next of list[cur]) {
      if (parent[next]) continue;
      if (visited[next]) continue;

      parent[next] = cur;
      depth[next] = level + 1;
      stack.push([next, level + 1]);
    }
  }
};

dfs(1);

const check = (a, b) => {
  let curA = a;
  let curB = b;

  while (depth[curA] > depth[curB]) {
    curA = parent[curA];
  }
  while (depth[curB] > depth[curA]) {
    curB = parent[curB];
  }

  while (curA !== curB) {
    curA = parent[curA];
    curB = parent[curB];
  }

  return curA;
};

const result = nodes.map(([a, b]) => check(a, b));
console.log(result.join("\n"));
