const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
input.pop();

const list = input.map((v) => v.split(" "));

for (let i = 0; i < list.length; i++) {
  const [n, ...temp] = list[i];
  const str = temp.join("").toLowerCase();
  const f = n.toLowerCase();

  let answer = 0;

  for (let j = 0; j < str.length; j++) {
    if (str[j] === f) answer++;
  }

  console.log(f, answer);
}
