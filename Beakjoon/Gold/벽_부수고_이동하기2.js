// 14442
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M, K] = input.shift().split(" ").map(Number);
const board = input.map((str) => str.split(""));
const visited = Array.from({ length: N }, () => Array.from({ length: M }, () => new Array(K + 1).fill(false)));

const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    enqueue(val) {
        let newNode = new Node(val);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.size;
    }
    dequeue() {
        if (!this.first) return null;
        let temp = this.first;
        if (this.first === this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }
}

const bfs = () => {
    if (N === 1 && M === 1) return 1;
    const queue = new Queue();
    queue.enqueue([0, 0, K, 1]);
    visited[0][0][K] = true;

    while (queue.size) {
        const [x, y, remain, count] = queue.dequeue();

        for (let i = 0; i < 4; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];

            if (nx < 0 || nx >= N || ny < 0 || ny >= M) continue;
            if (remain > 0 && !visited[nx][ny][remain - 1] && board[nx][ny] === "1") {
                queue.enqueue([nx, ny, remain - 1, count + 1]);
                visited[nx][ny][remain - 1] = true;
            }
            if (!visited[nx][ny][remain] && board[nx][ny] === "0") {
                queue.enqueue([nx, ny, remain, count + 1]);
                visited[nx][ny][remain] = true;
            }
            if (nx === N - 1 && ny === M - 1) return count + 1;
        }
    }

    return -1;
};

console.log(bfs());
