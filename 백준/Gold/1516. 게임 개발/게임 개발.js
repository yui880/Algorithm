const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = Number(input.shift());
const graph = Array.from({ length: n + 1 }, () => []);
const cost = Array(n + 1).fill(0);
const indegree = Array(n + 1).fill(0);

input.forEach((str, i) => {
  const [b, ...e] = str.split(" ").map(Number);
  e.pop();

  cost[i + 1] = b;
  for (let j of e) {
    graph[j].push(i + 1);
    indegree[i + 1]++;
  }
});

const total = Array(n + 1).fill(0);
const queue = [];
let idx = 0;

// 진입 차수 0인 노드 삽입
indegree.forEach((val, i) => {
  if (val === 0 && i !== 0) {
    queue.push(i);
    total[i] = cost[i];
  }
});

// 큐에서 꺼내서 나가는 간선 제거하고, 노드 추가 반복
while (queue.length > idx) {
  const index = queue[idx++];

  for (const next of graph[index]) {
    indegree[next]--;
    // 먼저 지어야 하는 건물의 (최종 건설 시간 + 현재 건물 건설 시간) 구하기
    // max를 하는 이유는 제일 마지막에 건설한 건물까지 구해야 하기 때문
    total[next] = Math.max(total[next], total[index] + cost[next]);

    if (indegree[next] === 0) queue.push(next);
  }
}

console.log(total.slice(1).join("\n"));
