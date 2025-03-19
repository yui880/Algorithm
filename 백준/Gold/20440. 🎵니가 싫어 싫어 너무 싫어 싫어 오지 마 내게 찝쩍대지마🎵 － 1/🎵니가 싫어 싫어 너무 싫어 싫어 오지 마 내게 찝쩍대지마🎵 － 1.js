const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = +input.shift();
const list = input
  .map((str) =>
    str.split(" ").map((v, i) => {
      if (i === 0) return [+v, 1];
      else return [+v, -1];
    })
  )
  .flat(1)
  .sort((a, b) => a[0] - b[0] || b[1] - a[1]);

const stack = [];

let answer = -1;
let [s, e] = [0, 0];

for (let i = 0; i < list.length; i++) {
  const cur = list[i];

  if (cur[1] === 1) stack.push(cur);
  else {
    const len = stack.length;
    const before = stack.pop();

    if (len > answer && cur[0] !== before[0]) {
      answer = len;
      e = cur[0];
      s = before[0];
    }
  }
}

console.log(answer);
console.log(s, e);
