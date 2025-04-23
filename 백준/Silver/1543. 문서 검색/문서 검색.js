const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const document = input[0];
const word = input[1];

const n = document.length;
const m = word.length;

let count = 0;
let index = 0;

while (index <= n - m) {
  let match = true;

  for (let j = 0; j < m; j++) {
    if (document[index + j] !== word[j]) {
      match = false;
      break;
    }
  }

  if (match) {
    count++;
    index += m;
  } else {
    index++;
  }
}

console.log(count);
