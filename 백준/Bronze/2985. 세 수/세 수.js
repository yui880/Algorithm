const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [a, b, c] = input[0].split(" ").map(Number);

if (a + b === c) console.log(`${a}+${b}=${c}`);
else if (a - b === c) console.log(`${a}-${b}=${c}`);
else if (a * b === c) console.log(`${a}*${b}=${c}`);
else if (a / b === c) console.log(`${a}/${b}=${c}`);
else if (a === b + c) console.log(`${a}=${b}+${c}`);
else if (a === b * c) console.log(`${a}=${b}*${c}`);
else if (a === b / c) console.log(`${a}=${b}/${c}`);
else if (a === b - c) console.log(`${a}=${b}-${c}`);
