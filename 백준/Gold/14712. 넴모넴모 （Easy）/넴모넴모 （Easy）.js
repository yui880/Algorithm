const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);

const arr = Array(n * m).fill(0);
let answer = 0;

function dfs(cur) {
  if (cur === n * m) {
    for (let i = 0; i < n * m; i++) {
      // 오른쪽 끝일 경우
      if (i % m === m - 1) continue;
      // 마지막 줄일 경우
      if (i === (n - 1) * m) break;
      // 2 x 2 넴모가 있을 경우
      if (arr[i] && arr[i + 1] && arr[i + m] && arr[i + m + 1]) return;
    }

    answer++;
    return;
  }

  arr[cur] = 1;
  dfs(cur + 1);

  arr[cur] = 0;
  dfs(cur + 1);
}

dfs(0);
console.log(answer);
