const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const init = input.shift().split(" ").map(Number);

const dfs = () => {
  const stack = [];
  const visited = new Set();
  const cVisited = new Set();

  visited.add([0, 0, init[2]].join(","));
  cVisited.add(init[2]);

  stack.push([0, 0, init[2]]);

  while (stack.length) {
    const list = stack.pop();

    for (let from = 0; from < 3; from++) {
      for (let to = 0; to < 3; to++) {
        if (from === to) continue;

        const updated = [...list];

        const pourAmount = Math.min(updated[from], init[to] - updated[to]);
        updated[from] -= pourAmount;
        updated[to] += pourAmount;

        if (!visited.has(updated.join(","))) {
          visited.add(updated.join(","));
          stack.push(updated);
          if (updated[0] === 0) cVisited.add(updated[2]);
        }
      }
    }
  }

  return [...cVisited];
};

const answer = dfs();
console.log(answer.sort((a, b) => a - b).join(" "));
