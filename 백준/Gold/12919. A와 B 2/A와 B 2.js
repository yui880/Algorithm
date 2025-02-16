const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const init = input[0];
const target = input[1];

const dfs = (start) => {
  const stack = [];
  const visited = new Set();

  stack.push(start);
  visited.add(start);

  while (stack.length) {
    const str = stack.pop();
    if (str.length < init.length) continue;
    if (str === init) return true;

    if (str.endsWith("A")) {
      const next = str.slice(0, -1);
      if (!visited.has(next)) {
        visited.add(next);
        stack.push(next);
      }
    }

    if (str.startsWith("B")) {
      const next = str.split("").reverse().slice(0, -1).join("");
      if (!visited.has(next)) {
        visited.add(next);
        stack.push(next);
      }
    }
  }
};

console.log(dfs(target) ? 1 : 0);
