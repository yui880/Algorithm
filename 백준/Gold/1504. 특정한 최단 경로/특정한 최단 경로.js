const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let id = 0;
const [n, m] = input[id++].split(" ").map(Number);
const graph = {};

while (id < input.length - 1) {
  const [s, e, w] = input[id++].split(" ").map(Number);

  graph[s] ? graph[s].push([e, w]) : (graph[s] = [[e, w]]);
  graph[e] ? graph[e].push([s, w]) : (graph[e] = [[s, w]]);
}

const [f, s] = input[id].split(" ").map(Number);

const dijksta = (start) => {
  const distance = Array(n + 1).fill(Infinity);

  const queue = [[start, 0]];
  distance[start] = 0;

  let idx = 0;
  while (queue.length > idx) {
    const [cur, weight] = queue[idx++];

    if (distance[cur] < weight) continue;
    if (!graph[cur]) continue;

    for (const [next, w] of graph[cur]) {
      const nextWeight = weight + w;

      if (nextWeight < distance[next]) {
        queue.push([next, nextWeight]);
        distance[next] = nextWeight;
      }
    }
  }

  return distance;
};

const start = dijksta(1);
const first = dijksta(f);
const second = dijksta(s);

const startToFirst = start[f];
const startToSecond = start[s];

const firstToSecond = first[s];

const firstToEnd = first[n];
const secondToEnd = second[n];

const r1 = startToFirst + firstToSecond + secondToEnd;
const r2 = startToSecond + firstToSecond + firstToEnd;

const answer = Math.min(r1, r2);

answer === Infinity ? console.log(-1) : console.log(answer);
