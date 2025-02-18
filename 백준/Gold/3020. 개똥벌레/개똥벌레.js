const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, h] = input.shift().split(" ").map(Number);
const even = Array(h + 1).fill(0);
const odd = Array(h + 1).fill(0);

input.forEach((v, i) => {
  const val = Number(v);

  if (i % 2 === 0) {
    even[1]++;
    even[val + 1]--;
  } else {
    odd[h - val + 1]++;
  }
});

const total = {};

for (let i = 1; i < h + 1; i++) {
  even[i] += even[i - 1];
  odd[i] += odd[i - 1];

  const temp = even[i] + odd[i];
  total[temp] ? total[temp]++ : (total[temp] = 1);
}

const min = Math.min(...Object.keys(total));
console.log(min, total[min]);
