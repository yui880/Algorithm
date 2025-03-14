const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = +input[0];
const init = input[1].split("").map(Number);
const target = input[2].split("").map(Number);

const check = (arr, count) => {
  for (let i = 1; i < n; i++) {
    if (arr[i - 1] !== target[i - 1]) {
      // 같지 않으면 누르기
      count++;

      arr[i - 1] = arr[i - 1] === 1 ? 0 : 1;
      arr[i] = arr[i] === 1 ? 0 : 1;
      if (i + 1 < n) arr[i + 1] = arr[i + 1] === 1 ? 0 : 1;
    }
  }

  if (arr.join("") === target.join("")) return count;
  else return Infinity;
};

const temp1 = [...init];
const temp2 = [...init];

temp2[0] = temp2[0] === 1 ? 0 : 1;
temp2[1] = temp2[1] === 1 ? 0 : 1;

const result1 = check(temp1, 0);
const result2 = check(temp2, 1);

let answer = Math.min(result1, result2);
if (answer === Infinity) console.log(-1);
else console.log(answer);
