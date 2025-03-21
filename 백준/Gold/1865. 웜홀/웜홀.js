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

  const dist = Array.from({ length: n + 1 }, () => Array(n + 1).fill(Infinity));
  for (const [s, e, t] of route) {
    dist[s][e] = Math.min(dist[s][e], t);
  }

  let found = false;

  for (let k = 1; k <= n; k++) {
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= n; j++) {
        if (dist[i][k] !== Infinity && dist[k][j] !== Infinity) {
          dist[i][j] = Math.min(dist[i][j], dist[i][k] + dist[k][j]);
        }

        if (i === j && dist[i][j] < 0) {
          found = true;
          break;
        }
      }
    }
    if (found) break;
  }

  if (found) console.log("YES");
  else console.log("NO");
}
