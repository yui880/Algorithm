const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, k] = input[0].split(" ").map(Number);
const river = input[1].split(" ").map(Number);

const visited = new Set();

river.forEach((v) => visited.add(v));

const queue = [];
let count = 0;
let unhappy = 0;

for (const r of river) {
  visited.add(r);
  queue.push([r, 0]);
}

let idx = 0;

while (queue.length > idx) {
  const [cur, distance] = queue[idx++];

  for (const next of [cur - 1, cur + 1]) {
    if (!visited.has(next)) {
      visited.add(next);

      queue.push([next, distance + 1]);
      unhappy += distance + 1;
      count++;

      if (count === k) {
        console.log(unhappy);
        process.exit(0);
      }
    }
  }
}
