const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m] = input.shift().split(" ").map(Number);
const route = input.map((str) => str.split(" ").map(Number));

const dist = Array.from({ length: n + 1 }, () => Array.from({ length: m + 1 }, () => [Infinity, Infinity]));

for (const [s, e, d] of route) {
  dist[s][e] = [d, e];
  dist[e][s] = [d, s];
}

for (let i = 1; i <= n; i++) {
  dist[i][i] = [0, "-"];
}

for (let k = 1; k <= n; k++) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      if (dist[i][k][0] !== Infinity && dist[k][j][0] !== Infinity) {
        // k를 지나쳐서 갈 수 있는 경로가 있으면

        const [before, bNext] = dist[i][j];
        const cur = dist[i][k][0] + dist[k][j][0];
        const cNext = dist[i][k][1];

        if (before > cur) {
          dist[i][j] = [cur, cNext];
        }
      }
    }
  }
}

for (let i = 1; i <= n; i++) {
  const row = [];
  for (let j = 1; j <= n; j++) {
    row.push(dist[i][j][1]);
  }
  console.log(row.join(" "));
}
