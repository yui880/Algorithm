const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = +input[0];
const m = +input[1];
const graph = Array.from({ length: n + 1 }, () => []);
const [s, e] = input[input.length - 1].split(" ").map(Number);

for (let i = 2; i < input.length - 1; i++) {
  const [s, e, w] = input[i].split(" ").map(Number);
  graph[s].push([e, w]);
}

class MinHeap {
  constructor() {
    this.heap = [];
  }
  parent(i) {
    return Math.floor((i - 1) / 2);
  }
  leftChild(i) {
    return 2 * i + 1;
  }
  rightChild(i) {
    return 2 * i + 2;
  }
  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  push(val) {
    this.heap.push(val);
    this.heapifyUp(this.heap.length - 1);
  }

  pop() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();

    let min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown(0);

    return min;
  }

  heapifyUp(i) {
    while (i > 0 && this.heap[i][1] < this.heap[this.parent(i)][1]) {
      this.swap(i, this.parent(i));
      i = this.parent(i);
    }
  }

  heapifyDown(i) {
    let minIndex = i;
    const left = this.leftChild(i);
    const right = this.rightChild(i);

    if (left < this.heap.length && this.heap[left][1] < this.heap[minIndex][1]) {
      minIndex = left;
    }
    if (right < this.heap.length && this.heap[right][1] < this.heap[minIndex][1]) {
      minIndex = right;
    }

    if (minIndex === i) return;
    this.swap(minIndex, i);
    this.heapifyDown(minIndex);
  }

  isEmpty() {
    return this.heap.length === 0;
  }
}

const dijkstra = (start, end) => {
  const queue = new MinHeap();
  const d = Array(n + 1).fill(Infinity);

  queue.push([start, 0, 1, `${start}`]);
  d[start] = 0;

  while (!queue.isEmpty()) {
    const [cur, weight, count, route] = queue.pop();
    if (d[cur] < weight) continue;

    if (cur === end) return [weight, count, route];

    for (const [next, w] of graph[cur]) {
      const nextWeight = weight + w;

      if (nextWeight < d[next]) {
        queue.push([next, nextWeight, count + 1, `${route} ${next}`]);
        d[next] = nextWeight;
      }
    }
  }

  return false;
};

const [w, c, r] = dijkstra(s, e);
console.log(w);
console.log(c);
console.log(r);
