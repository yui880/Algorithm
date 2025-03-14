const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const t = +input.shift();

let answer = [];

for (let i = 0; i < t; i++) {
  const str = input[i * 2];
  const k = +input[i * 2 + 1];
  let [short, long] = [Infinity, -1];

  const count = {};

  for (let i = 0; i < str.length; i++) {
    const cur = str[i];

    count[cur] ? count[cur].push(i) : (count[cur] = [i]);
  }

  for (const key in count) {
    if (count[key].length < k) continue;

    for (let j = 0; j <= count[key].length - k; j++) {
      const len = count[key][j + k - 1] - count[key][j] + 1;

      short = Math.min(short, len);
      long = Math.max(long, len);
    }
  }

  if (short === Infinity) {
    answer.push(-1);
  } else {
    answer.push(short + " " + long);
  }
}

console.log(answer.join("\n"));
