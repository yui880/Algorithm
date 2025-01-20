const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = Number(input.shift());
const list = input.map((v) => v.split(""));

const weight = new Map();
list.forEach((word) => {
  let digit = 1;

  for (let i = word.length - 1; i >= 0; i--) {
    const char = word[i];
    weight.set(char, (weight.get(char) || 0) + digit);
    digit *= 10;
  }
});

const sortedChars = [...weight.entries()].sort((a, b) => b[1] - a[1]).map(([v]) => v);

const result = new Map(sortedChars.map((char, i) => [char, 9 - i]));

const answer = list.reduce((sum, cur) => {
  const num = Number(cur.map((v) => result.get(v)).join(""));
  return sum + num;
}, 0);

console.log(answer);
