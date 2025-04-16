const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const text = input[0].split("");
const count = {};

text.forEach((v) => {
  if (count[v]) count[v] += 1;
  else count[v] = 1;
});

const list = Object.entries(count).sort((a, b) => +b[1] - +a[1]);

const odd = list.filter((v) => v[1] % 2 === 1);
const even = list.filter((v) => v[1] % 2 === 0);

let str = [];

if (odd.length > 1) {
  console.log("I'm Sorry Hansoo");
} else {
  list.forEach((v) => str.push(v[0].repeat(Math.floor(v[1] / 2))));
}

str.sort();
let middle = odd.length === 1 ? odd[0][0] : "";
console.log(str.join("") + middle + str.reverse().join(""));
