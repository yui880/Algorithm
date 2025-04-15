const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = +input.shift();

const gcd = (a, b) => {
  const r = a % b;

  if (r === 0) return b;
  return gcd(b, r);
};

for (let i = 0; i < n; i++) {
  const [cnt, ...list] = input[i].split(" ").map(Number);
  list.sort((a, b) => b - a);

  let answer = 0;

  for (let j = 0; j < cnt - 1; j++) {
    for (let k = j + 1; k < cnt; k++) {
      answer += gcd(list[j], list[k]);
    }
  }

  console.log(answer);
}
