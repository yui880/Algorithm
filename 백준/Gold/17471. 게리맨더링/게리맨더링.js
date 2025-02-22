const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = +input.shift();
const people = input.shift().split(" ").map(Number);
const nums = Array.from({ length: n }, (_, i) => i + 1);
const graph = Array.from({ length: n + 1 }, () => []);

input.forEach((str, i) => {
  const [t, ...temp] = str.split(" ").map(Number);
  graph[i + 1] = temp;
});

let answer = Infinity;

const check = (a) => {
  const tempA = new Set(a);
  const b = nums.filter((v) => !tempA.has(v));
  const tempB = new Set(b);

  const bfs = (list, setlist) => {
    if (list.length === 0) return [true, 0];

    const visited = Array(n + 1).fill(false);
    const queue = [];

    queue.push(list[0]);
    visited[list[0]] = true;

    let idx = 0;
    while (queue.length > idx) {
      const node = queue[idx++];

      for (const next of graph[node]) {
        if (!visited[next] && setlist.has(next)) {
          visited[next] = true;
          queue.push(next);
        }
      }
    }

    let flag = true;
    let sum = 0;
    for (let i = 0; i < list.length; i++) {
      if (!visited[list[i]]) flag = false;
      sum += people[list[i] - 1];
    }

    return [flag, sum];
  };

  const checkedA = bfs(a, tempA);
  const checkedB = bfs(b, tempB);

  if (checkedA[0] && checkedB[0]) {
    answer = Math.min(answer, Math.abs(checkedA[1] - checkedB[1]));
  }
};

check([1, 4]);

const arr = [];

const combination = (at, count, end) => {
  if (count === end) {
    check(arr);
    return;
  }

  for (let i = at; i <= n; i++) {
    arr.push(i);
    combination(i + 1, count + 1, end);
    arr.pop();
  }
};

for (let i = 1; i <= n; i++) {
  combination(1, 0, i);
}

console.log(answer === Infinity ? -1 : answer);
