const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m] = input.shift().split(" ").map(Number);
const board = input.map((str) => str.split(" ").map(Number));

const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

// 외부 공기가 있는 부분을 체크한다.
const findOuter = (a, b, visited) => {
  const queue = [[a, b]];
  visited[a][b] = true;
  board[a][b] = -1;

  let idx = 0;
  while (queue.length > idx) {
    const [x, y] = queue[idx++];

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;

      if (!visited[nx][ny] && (board[nx][ny] === 0 || board[nx][ny] === -1)) {
        visited[nx][ny] = true;
        board[nx][ny] = -1;
        queue.push([nx, ny]);
      }
    }
  }
};

// 녹여지는 면인지 확인하기
const isMelting = (x, y) => {
  let count = 0;

  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];

    if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;
    if (board[nx][ny] === -1) count++;
  }

  if (count >= 2) return true;
  else return false;
};

// 치즈를 녹인다. (외부 공기와 2면 이상 접촉한 부분을 체크해서 없앤다)
const meltCheese = (a, b, visited) => {
  const melted = [];

  const queue = [[a, b]];
  visited[a][b] = true;

  let idx = 0;
  while (queue.length > idx) {
    const [x, y] = queue[idx++];

    if (isMelting(x, y)) {
      melted.push([x, y]);
    }

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;

      if (!visited[nx][ny] && board[nx][ny] === 1) {
        visited[nx][ny] = true;
        queue.push([nx, ny]);
      }
    }
  }

  return melted;
};

// 외부 공기랑 맞닿은 곳인지 확인
const isOuter = (x, y) => {
  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];

    if (nx < 0 || nx >= n || ny < 0 || ny >= m) return true;
  }
  return false;
};

let cheeseCount = board.flat(2).reduce((acc, cur) => acc + cur, 0);
let time = 0;

while (cheeseCount > 0) {
  let outerVisited = Array.from({ length: n }, () => Array(m).fill(false));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (!outerVisited[i][j] && (board[i][j] === 0 || board[i][j] === -1) && isOuter(i, j)) {
        findOuter(i, j, outerVisited);
      }
    }
  }

  const cheeseVisited = Array.from({ length: n }, () => Array(m).fill(false));
  let melted = [];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (!cheeseVisited[i][j] && board[i][j] === 1) {
        const cheese = meltCheese(i, j, cheeseVisited);
        melted = [...melted, ...cheese];
      }
    }
  }

  cheeseCount -= melted.length;
  melted.map(([x, y]) => (board[x][y] = 0));
  time++;
}

console.log(time);
