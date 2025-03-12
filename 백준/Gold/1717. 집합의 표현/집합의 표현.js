const find = (x) => {
  const nodes = [];

  while (root[x] !== x) {
    nodes.push(x);
    x = root[x];
  }

  for (const node of nodes) {
    root[node] = x;
  }

  return x;
};

const union = (a, b) => {
  const rootA = find(a);
  const rootB = find(b);

  if (rootA === rootB) return;

  if (rootA < rootB) root[rootB] = rootA;
  else root[rootA] = rootB;
};

const isUnion = (a, b) => {
  const rootA = find(a);
  const rootB = find(b);

  if (rootA === rootB) return "YES";
  else return "NO";
};

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
let n, m;
const root = [];
let list = [];
let answer = [];

rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  const [nValue, mValue] = input.shift().split(" ").map(Number);
  n = nValue;
  m = mValue;

  for (let i = 0; i <= n; i++) {
    root[i] = i;
  }

  list = input.map((str) => str.split(" ").map(Number));

  for (const [cmd, a, b] of list) {
    if (cmd === 0) {
      union(a, b);
    } else if (cmd === 1) {
      answer.push(isUnion(a, b));
    }
  }

  console.log(answer.join("\n"));
});
