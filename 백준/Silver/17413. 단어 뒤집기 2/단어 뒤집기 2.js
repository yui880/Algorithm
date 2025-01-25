const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const str = input[0].split(/(<|>)/).filter(Boolean);

let flag = true;
const result = str.map((v) => {
  if (v === "<") {
    flag = false;
    return v;
  }
  if (v === ">") {
    flag = true;
    return v;
  }

  if (!flag) return v;
  else
    return v
      .split(" ")
      .map((item) => [...item].reverse().join(""))
      .join(" ");
});

console.log(result.join(""));
