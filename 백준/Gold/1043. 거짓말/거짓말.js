const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let idx = 0;
const [n, m] = input[idx++].split(" ").map(Number);
const [tCount, ...truthList] = input[idx++].split(" ").map(Number);

let checkList = new Set(truthList);

const party = [];
while (input.length > idx) {
  const [_, ...temp] = input[idx++].split(" ").map(Number);
  party.push(temp);
}

let answer = 0;

for (let i = 0; i < m; i++) {
  for (const list of party) {
    const test = new Set([...list, ...checkList]);

    if (test.size !== checkList.size + list.length) {
      checkList = test;
    } else {
      if (i === m - 1) {
        answer++;
      }
    }
  }
}

console.log(answer);
