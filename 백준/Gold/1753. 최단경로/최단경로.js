const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let id = 0;
const [v, e] = input[id++].split(" ").map(Number);
const k = Number(input[id++]);

const routes = [];
while (input.length > id) {
  const str = input[id++].split(" ").map(Number);
  routes.push(str);
}

const graph = {};
for (const [u, v, w] of routes) {
  graph[u] ? graph[u].push([v, w]) : (graph[u] = [[v, w]]);
}

// 우선순위 큐
class MinHeap {
  constructor() {
    this.heap = [];
  }
  leftChild(i) {
    return 2 * i + 1;
  }
  rightChild(i) {
    return 2 * i + 2;
  }
  parent(i) {
    return Math.floor((i - 1) / 2);
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

    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown(0);

    return min;
  }
  heapifyUp(i) {
    while (i > 0 && this.heap[this.parent(i)][1] > this.heap[i][1]) {
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

    if (minIndex !== i) {
      this.swap(i, minIndex);
      this.heapifyDown(minIndex);
    }
  }
  isEmpty() {
    return this.heap.length === 0;
  }
}

const dijkstra = (start) => {
  const distance = Array(v + 1).fill(Infinity);
  distance[start] = 0;

  const queue = new MinHeap();
  queue.push([start, 0]);

  while (!queue.isEmpty()) {
    const [cur, totalWeight] = queue.pop();

    // 현재 경로보다 더 적은 가중치로 올 수 있는 경로 있으면 건너뛰기
    if (distance[cur] < totalWeight) continue;
    if (!graph[cur]) continue;

    for (const [next, weight] of graph[cur]) {
      let nextWeight = totalWeight + weight;

      if (distance[next] > nextWeight) {
        distance[next] = nextWeight;
        queue.push([next, nextWeight]);
      }
    }
  }

  return distance.slice(1);
};

const answer = dijkstra(k)
  .map((v) => (v === Infinity ? "INF" : v))
  .join("\n");

console.log(answer);
