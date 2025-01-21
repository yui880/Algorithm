const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

input.pop();

let i = 0;
const list = [];

while (i < input.length) {
  const n = Number(input[i]);
  if (n === 0) break;
  i++;

  if (i + n > input.length) break;

  const temp = [];
  for (let j = 0; j < n; j++) {
    temp.push(input[i + j].split(" ").map(Number));
  }
  list.push(temp);
  i += n;
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  enqueue(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.size++;
  }

  dequeue() {
    if (!this.head) return null;

    const value = this.head.value;
    this.head = this.head.next;

    if (!this.head) this.tail = null;
    this.size--;

    return value;
  }

  isEmpty() {
    return this.size === 0;
  }
}

const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

const dijkstra = (board) => {
  const n = board.length;
  const queue = new Queue();
  queue.enqueue([0, 0, board[0][0]]);

  const visited = Array.from({ length: n }, () => Array(n).fill(Infinity));
  visited[0][0] = board[0][0];

  while (!queue.isEmpty()) {
    const [x, y, rupee] = queue.dequeue();

    if (visited[x][y] < rupee) continue;
    if (x === n - 1 && y === n - 1) continue;

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx < 0 || nx >= n || ny < 0 || ny >= n) continue;

      const nextRupee = board[nx][ny] + rupee;
      if (visited[nx][ny] > nextRupee) {
        visited[nx][ny] = nextRupee;
        queue.enqueue([nx, ny, nextRupee]);
      }
    }
  }

  return visited[n - 1][n - 1];
};

const answer = list.map((b) => dijkstra(b));

console.log(answer.map((v, i) => `Problem ${i + 1}: ${v}`).join("\n"));
