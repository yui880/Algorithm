const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = BigInt(input[0]);
let result = "";

const hanoi = (start, end, n) => {
  if (n === 1n) {
    result += `${start} ${end}\n`;
    return;
  }

  hanoi(start, BigInt(6) - start - end, n - 1n);
  result += `${Number(start)} ${Number(end)}\n`;
  hanoi(BigInt(6) - start - end, end, n - 1n);
};

console.log((2n ** n - 1n).toString());

if (n <= 20n) {
  hanoi(1n, 3n, n);
  console.log(result.trim());
}
