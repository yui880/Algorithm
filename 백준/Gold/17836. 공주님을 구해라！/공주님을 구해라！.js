const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m, t] = input.shift().split(" ").map(Number);
const board = input.map((str) => str.split(" ").map(Number));

const visited = Array.from({ length: n }, () => Array.from({ length: m }, () => [Infinity, Infinity]));

const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

const bfs = (a, b) => {
  const queue = [];
  queue.push([a, b, 0, 0]);

  visited[a][b][0] = 0;

  let idx = 0;
  while (queue.length > idx) {
    const [x, y, hasGram, time] = queue[idx++];

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;

      if (hasGram === 0) {
        if (board[nx][ny] === 2) {
          // 그람 없는데 다음이 그람일 때
          if (visited[nx][ny][0] > time + 1) visited[nx][ny][0] = time + 1; // 그람 없이 간 시간 기록
          queue.push([nx, ny, 1, time + 1]); // 다음부터는 그람 있이 이동
        } else if (board[nx][ny] === 0 && visited[nx][ny][0] > time + 1) {
          // 그람 없어서 0만 갈 수 있음
          visited[nx][ny][0] = time + 1;
          queue.push([nx, ny, 0, time + 1]);
        }
      } else if (hasGram === 1) {
        if (visited[nx][ny][1] > time + 1) {
          visited[nx][ny][1] = time + 1;
          queue.push([nx, ny, 1, time + 1]);
        }
      }
    }
  }
};

bfs(0, 0);
const answer = Math.min(...visited[n - 1][m - 1]);

if (answer <= t) console.log(answer);
else console.log("Fail");
