const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m, h] = input.shift().split(" ").map(Number);
const ladder = Array.from({ length: h + 1 }, () => Array(n + 1).fill(0));

for (let i = 0; i < m; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  ladder[a][b] = 1;
}

const isValid = () => {
  for (let y = 1; y <= n; y++) {
    // 사다리 시작점
    let j = y;
    for (let i = 1; i <= h; i++) {
      if (ladder[i][j - 1] === 1) {
        // 왼쪽으로 가기
        j -= 1;
      } else if (ladder[i][j] === 1) {
        // 오른쪽으로 가기
        j += 1;
      }
    }

    if (j !== y) return false;
  }

  return true;
};

let answer = 4;

const dfs = (count, row, col) => {
  if (count >= answer) return;

  if (isValid()) {
    answer = Math.min(answer, count);
    return;
  }

  if (count === 3) return;

  for (let i = row; i <= h; i++) {
    for (let j = i === row ? col : 1; j < n; j++) {
      if (ladder[i][j] === 0 && ladder[i][j - 1] !== 1 && ladder[i][j + 1] !== 1) {
        ladder[i][j] = 1;
        dfs(count + 1, i, j + 2); // 연속된 사다리를 놓을 수 없으므로 j+2부터 탐색
        ladder[i][j] = 0;
      }
    }
  }
};

dfs(0, 1, 1);
console.log(answer === 4 ? -1 : answer);
