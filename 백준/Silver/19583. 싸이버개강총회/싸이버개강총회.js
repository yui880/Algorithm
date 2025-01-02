const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let idx = 0;
const [s, e, q] = input[idx++].split(" ");

const list = [];
while (input.length > idx) {
  list.push(input[idx++].split(" "));
}

const changeTime = (str) => {
  const [h, m] = str.split(":").map(Number);

  return h * 60 + m;
};

const start = changeTime(s);
const end = changeTime(e);
const quit = changeTime(q);

const result = {};
let answer = 0;

for (const [t, name] of list) {
  const time = changeTime(t);

  if (time <= start) {
    result[name] = 1;
  } else if (time >= end && time <= quit) {
    if (result[name]) {
      result[name] += 1;
      if (result[name] === 2) answer++;
    }
  }
}

console.log(answer);
