const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = Number(input[0]);
const m = new Map();

const list = input.slice(1).forEach((str) => {
  const [name, state] = str.split(" ");
  m[name] = state;
});

const answer = [];
for (const val in m) {
  if (m[val] === "enter") answer.push(val);
}

console.log(
  answer
    .sort((a, b) => {
      if (a < b) return 1;
      if (a > b) return -1;
      if (a === b) return 0;
    })
    .join("\n")
);
