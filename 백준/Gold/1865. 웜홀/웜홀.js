const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let id = 0;
const t = +input[id++];

for (let count = 0; count < t; count++) {
  const [n, m, w] = input[id++].split(" ").map(Number);
  const route = [];

  for (let j = 0; j < m; j++) {
    const [s, e, t] = input[id++].split(" ").map(Number);

    route.push([s, e, t]);
    route.push([e, s, t]);
  }

  for (let j = 0; j < w; j++) {
    const [s, e, t] = input[id++].split(" ").map(Number);

    route.push([s, e, -t]);
  }

  const findNegativeCycle = () => {
    const dist = Array(n + 1).fill(0); // 0으로 설정하면 모든 점에서 시작

    for (let i = 0; i < n; i++) {
      // n번 순회
      let updated = false;

      for (let j = 0; j < route.length; j++) {
        // m개의 간선
        const [s, e, t] = route[j];

        if (dist[s] + t < dist[e]) {
          dist[e] = dist[s] + t;
          updated = true;

          if (i === n - 1) return true;
        }
      }

      if (!updated) break;
    }

    return false;
  };

  const found = findNegativeCycle();

  if (found) console.log("YES");
  else console.log("NO");
}
