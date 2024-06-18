const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input.shift());
const list = input.map((str) => [...str]);

let answer = 0;

list.forEach((str) => {
  let isPossible = true;
  let flag = "";
  const alphabet = Array(26).fill(false);

  for (let i = 0; i < str.length; i++) {
    const index = str[i].charCodeAt(0) - 97;

    // 알파벳 나온적 없음
    if (!alphabet[index]) {
      alphabet[index] = true;
      flag = index;
    } else if (flag != index) {
      // 앞에서 나온적 있는데 안 연결됨
      isPossible = false;
      break;
    }
  }

  if (isPossible) answer++;
});

console.log(answer);
