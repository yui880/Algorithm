const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const t = +input.shift();

const bfs = (arr) => {
  const queue = [];
  queue.push([String(arr[0]), 0]);

  let total = [];

  let idx = 0;
  while (queue.length > idx) {
    const [str, count] = queue[idx++];
    if (count >= arr.length - 1) {
      total.push(str);
      continue;
    }

    queue.push([str + " " + arr[count + 1], count + 1]);
    queue.push([str + "+" + arr[count + 1], count + 1]);
    queue.push([str + "-" + arr[count + 1], count + 1]);
  }

  return total;
};

let total = [];

for (let i = 0; i < t; i++) {
  const n = +input[i];
  const arr = Array.from({ length: n }, (_, i) => i + 1);

  let result = bfs(arr);

  const operator = result.map((v) => v.match(/[+\-]/g));
  const nums = result.map((v) => {
    const noSpaces = v.replace(/\s+/g, "");
    return noSpaces.split(/[-/+]/).map(Number);
  });

  let answer = [];

  for (let k = 0; k < operator.length; k++) {
    let sum = nums[k][0];

    if (!operator[k]) {
      if (sum === 0) answer.push(result[k]);
      continue;
    }

    for (let j = 1; j < nums[k].length; j++) {
      if (operator[k][j - 1] === "+") sum += nums[k][j];
      if (operator[k][j - 1] === "-") sum -= nums[k][j];
    }

    if (sum === 0) {
      answer.push(result[k]);
    }
  }

  total.push(answer.join("\n"));
}

console.log(total.join("\n\n"));
