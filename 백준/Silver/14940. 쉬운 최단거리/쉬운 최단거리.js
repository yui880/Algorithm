const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m] = input.shift().split(" ").map(Number);
const board = input.map((str) => str.split(" ").map(Number));

const dx = [0, 1, -1, 0];
const dy = [1, 0, 0, -1];

const answer = Array.from({ length: n }, () => Array(m).fill(-1));

const targets = [];
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (board[i][j] === 2) {
      targets.push([i, j]);
    } else if (board[i][j] === 0) {
      answer[i][j] = 0; 
    }
  }
}

const bfs = () => {
  const queue = [];
  const visited = Array.from({ length: n }, () => Array(m).fill(false));
  
  for (const [tx, ty] of targets) {
    queue.push([tx, ty, 0]);
    visited[tx][ty] = true;
    answer[tx][ty] = 0;
  }
  
  let idx = 0;
  while (idx < queue.length) {
    const [x, y, dist] = queue[idx++];
    
    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      
      if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;
      if (visited[nx][ny] || board[nx][ny] === 0) continue;
      
      visited[nx][ny] = true;
      answer[nx][ny] = dist + 1;
      queue.push([nx, ny, dist + 1]);
    }
  }
};

bfs();

// 출력 형식 조정
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (board[i][j] === 1 && answer[i][j] === -1) {
      answer[i][j] = -1; // 도달할 수 없는 경우
    }
  }
}

console.log(answer.map((row) => row.join(" ")).join("\n"));