const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m] = input.shift().split(" ").map(Number);
const order = input.map(Number);

const dfs = () => {
  const stack = [];
  const visited = Array(n).fill(false);
  stack.push([0, 1]);
  visited[0] = true;

  while (stack.length > 0) {
    const [cur, count] = stack.pop();
    const next = order[cur];

    if (!visited[next]) {
      visited[next] = true;
      stack.push([next, count + 1]);

      if (next === m) {
        return count;
      }
    } else {
      return -1;
    }
  }
};

console.log(dfs());
