const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "test.txt";
const input = fs.readFileSync(filePath).toString().trim();
const N = BigInt(input); 

const findNthNumber = (N) => {
  let result = 0n; 
  let power = 1n; 

  while (N > 0n) {
    if (N % 2n === 1n) result += power;
    N /= 2n; 
    power *= 3n;
       }

  return result.toString();
};

console.log(findNthNumber(N));
