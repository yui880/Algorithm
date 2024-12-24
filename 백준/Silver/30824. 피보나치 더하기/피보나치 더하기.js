const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = Number(input.shift());
const list = input.map((str) => str.split(" ").map(BigInt));

const fibo = [1n, 1n];

while (fibo[fibo.length - 1] < BigInt(10 ** 16)) {
  const i = fibo.length;
  fibo.push(fibo[i - 2] + fibo[i - 1]);
}

const canMakeX = (k, x) => {
  if (k === 1n) {
    return fibo.includes(x);
  }

  if (k === 2n) {
    for (const f of fibo) {
      if (f > x) break;
      if (fibo.includes(x - f)) return true;
    }

    return false;
  }

  if (k === 3n) {
    for (const f of fibo) {
      for (const s of fibo) {
        if (f > x || s > x || f + s > x) break;
        if (fibo.includes(x - f - s)) return true;
      }
    }

    return false;
  }
};

const answer = [];

for (const [k, x] of list) {
  const result = canMakeX(k, x);
  answer.push(result ? "YES" : "NO");
}

console.log(answer.join("\n"));
