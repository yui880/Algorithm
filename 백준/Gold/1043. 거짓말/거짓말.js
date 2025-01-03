const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let idx = 0;
const [n, m] = input[idx++].split(" ").map(Number);
const [tCount, ...truthList] = input[idx++].split(" ").map(Number);

const party = [];
while (input.length > idx) {
  const [_, ...temp] = input[idx++].split(" ").map(Number);
  party.push(temp);
}

const parents = Array.from({ length: n + 1 }, (_, i) => i);

const find = (x) => {
  if (x === parents[x]) return x;

  parents[x] = find(parents[x]);
  return parents[x];
};

const union = (x, y) => {
  const rootX = find(x);
  const rootY = find(y);

  if (rootX === rootY) return;

  if (rootX < rootY) parents[rootY] = rootX;
  else parents[rootX] = rootY;
};

// 진실 아는 사람 그룹화하기
truthList.forEach((val) => union(0, val));

// 파티 사람들 그룹화하기
for (const p of party) {
  for (let i = 1; i < p.length; i++) {
    union(p[0], p[i]);
  }
}

let answer = 0;

// 파티에 진실그룹 사람 있는지 확인하기
for (const p of party) {
  if (find(p[0]) !== 0) answer++;
}

console.log(answer);
