const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const croatia = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];

let str = input.shift();

croatia.forEach((val) => {
  str = str.replaceAll(val, "1");
});

console.log(str.length);
