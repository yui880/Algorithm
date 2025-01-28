const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = Number(input.shift());
const list = input.map((v) => {
  const temp = [...v].reduce((acc, item) => {
    if (+item == item) return acc + +item;
    else return acc;
  }, 0);

  return [v, temp];
});

list.sort((a, b) => {
  if (a[0].length < b[0].length) return -1;
  else if (a[0].length > b[0].length) return 1;
  else {
    if (a[1] < b[1]) return -1;
    else if (a[1] > b[1]) return 1;
    else {
      if (a < b) return -1;
      else return 1;
    }
  }
});

console.log(list.map((v) => v[0]).join("\n"));
