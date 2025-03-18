const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = +input.shift();
const list = input;

const checkPrefixLen = (str1, str2) => {
  let len = 0;

  for (let i = 0; i < str1.length; i++) {
    if (str1[i] !== str2[i]) {
      break;
    } else {
      len = i + 1;
    }
  }

  return len;
};

let max = 0;
let answer = [];

for (let i = 0; i < n; i++) {
  for (let j = i + 1; j < n; j++) {
    const temp = checkPrefixLen(list[i], list[j]);

    if (temp > max) {
      max = temp;
      answer = [list[i], list[j]];
    }
  }
}

console.log(answer.join("\n"));
