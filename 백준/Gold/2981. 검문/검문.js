const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = +input.shift();
const nums = input.map(Number).sort((a, b) => a - b);

const gcd = (a, b) => {
  if (b === 0) return 0;

  while (b > 0) {
    let temp = a;
    a = b;
    b = temp % b;
  }
  return a;
};

let g = nums[1] - nums[0]; // 최종적으로 모든 차이 사이의 최대 공약수가 기록됨

for (let i = 1; i < n - 1; i++) {
  const d = nums[i + 1] - nums[i];

  g = gcd(g, d); // 두 차이 사이의 최대 공약수 구하기 + 업데이트
}

const answer = new Set([g]);

for (let i = 2; i <= Math.sqrt(g); i++) {
  if (g % i === 0) {
    answer.add(i);
    answer.add(g / i);
  }
}

console.log([...answer].sort((a, b) => a - b).join(" "));
