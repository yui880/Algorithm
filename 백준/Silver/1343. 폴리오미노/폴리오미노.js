const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const origin = input[0].split(".");
const str = input[0].split(".").filter((v) => v !== "");

const result = [];

let flag = true;

for (const cur of str) {
  if (cur.length % 2 !== 0) {
    flag = false;
    break;
  }

  let len = cur.length;
  let temp = "";

  while (len >= 4) {
    temp += "AAAA";
    len -= 4;
  }

  if (len > 0) {
    temp += "BB";
  }

  result.push(temp);
}

if (!flag) {
  console.log(-1);
} else {
  let i = 0;

  const total = origin.map((v) => {
    if (v !== "") {
      return result[i++];
    } else {
      return "";
    }
  });

  console.log(total.join("."));
}
