const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m] = input.shift().split(" ").map(Number);
const list = input.map((str) => str.split(" ").map(Number));

const distance = Array(n + 1).fill(Infinity);

const bellmanFord = (start) => {
  distance[start] = 0;

  // n-1번 탐색해서 최종 최단 거리 테이블 확인 (마지막 1번은 음수 사이클 확인용)
  for (let i = 0; i < n; i++) {
    // 모든 간선 확인해서 최단거리 테이블 갱신
    for (let j = 0; j < m; j++) {
      const [cur, next, cost] = list[j];

      if (distance[cur] !== Infinity && distance[cur] + cost < distance[next]) {
        distance[next] = distance[cur] + cost;

        if (i == n - 1) return false;
      }
    }
  }

  return true;
};

const negativeCycle = bellmanFord(1);

if (negativeCycle) {
  console.log(
    distance
      .slice(2)
      .map((v) => (v === Infinity ? -1 : v))
      .join("\n")
  );
} else {
  console.log(-1);
}
