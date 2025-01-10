const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [r, c] = input.shift().split(" ").map(Number);
const board = input.map((str) => str.split(""));

const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

const dfs = () => {
  let answer = 0;

  const queue = [];
  // 방문을 비트마스크로 확인 - indexOf 사용하지 않을 수 있음
  const startCode = board[0][0].charCodeAt(0) - 65;
  queue.push([0, 0, 1, 1 << startCode]);

  while (queue.length) {
    const [x, y, d, v] = queue.pop();
    if (d > answer) answer = d;

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx < 0 || nx >= r || ny < 0 || ny >= c) continue;

      const charCode = board[nx][ny].charCodeAt(0) - 65;
      if ((v & (1 << charCode)) === 0) {
        // 방문 배열과 and 연산해서 현재 알파벳 포함되었는지 확인
        queue.push([nx, ny, d + 1, v | (1 << charCode)]);
      }
    }
  }

  return answer;
};

console.log(dfs());
