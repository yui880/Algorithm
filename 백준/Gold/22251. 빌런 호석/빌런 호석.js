const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, k, p, x] = input[0].split(" ").map(Number);
const target = String(x).split("").map(Number);

const bits = {
  0: 0b1111110, // 0: abcdef (g만 꺼짐)
  1: 0b0110000, // 1: bc (b, c만 켜짐)
  2: 0b1011011, // 2: abedg (c, f 꺼짐)
  3: 0b1111001, // 3: abcdg (e, f 꺼짐)
  4: 0b0110101, // 4: bcfg (a, d, e 꺼짐)
  5: 0b1101101, // 5: afcdg (b, e 꺼짐)
  6: 0b1101111, // 6: afedcg (b만 꺼짐)
  7: 0b1110000, // 7: abc (나머지 꺼짐)
  8: 0b1111111, // 8: abcdefg (모두 켜짐)
  9: 0b1111101, // 9: abcdfg (e만 꺼짐)
};

function countLEDFlips(fromDigit, toDigit) {
  const fromBits = bits[fromDigit];
  const toBits = bits[toDigit];
  const xor = fromBits ^ toBits;

  return xor
    .toString(2)
    .split("")
    .filter((bit) => bit === "1").length;
}

const padX = String(x).padStart(k, "0");
let count = 0;

for (let floor = 1; floor <= n; floor++) {
  const padFloor = String(floor).padStart(k, "0");

  let totalFlips = 0;

  for (let i = 0; i < k; i++) {
    const fromDigit = Number(padX[i]); // 기존
    const toDigit = Number(padFloor[i]); // 변경
    totalFlips += countLEDFlips(fromDigit, toDigit);
  }

  if (totalFlips >= 1 && totalFlips <= p && floor !== x) {
    count++;
  }
}

console.log(count);
