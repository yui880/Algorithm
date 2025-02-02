const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = Number(input.shift());
const list = input.map((str) => str.split(" ").map(Number));

const graph = Array.from({ length: n + 1 }, () => []);
const level = Array(n + 1).fill(-1);
const levelMap = new Map();

list.forEach(([parent, child, w]) => {
  graph[parent].push([child, w]);
});

function calculateLevels() {
  const queue = [1];
  level[1] = 1;
  levelMap.set(1, [1]);

  let idx = 0;
  while (queue.length > idx) {
    const current = queue[idx++];

    for (const [child, _] of graph[current]) {
      if (level[child] === -1) {
        level[child] = level[current] + 1;

        if (!levelMap.has(level[child])) {
          levelMap.set(level[child], []);
        }
        levelMap.get(level[child]).push(child);

        queue.push(child);
      }
    }
  }
}

calculateLevels();

const route = Array(n + 1).fill(0);
let maxLevel = Math.max(...levelMap.keys()) - 1;
let answer = 0;

while (maxLevel > 0) {
  const nodes = levelMap.get(maxLevel);

  for (const node of nodes) {
    const childList = graph[node];

    const vList = childList.map(([c, w]) => route[c] + w).sort((a, b) => b - a);
    if (vList.length === 0) continue;

    route[node] = vList[0];
    answer = Math.max(answer, (vList[0] || 0) + (vList[1] || 0));
  }

  maxLevel--;
}

console.log(answer);
