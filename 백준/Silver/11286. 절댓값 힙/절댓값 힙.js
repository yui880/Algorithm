const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const x = Number(input.shift());
const list = input.map((v) => Number(v));

class MinHeap {
  constructor() {
    this.heap = [];
  }
  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }
  leftChild(i) {
    return i * 2 + 1;
  }
  rightChild(i) {
    return i * 2 + 2;
  }
  parent(i) {
    return Math.floor((i - 1) / 2);
  }
  push(val) {
    this.heap.push(val);
    this.heapifyUp(this.heap.length - 1);
  }
  pop() {
    if (this.heap.length === 0) return [0, 0];
    if (this.heap.length === 1) return this.heap.pop();

    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown(0);

    return min;
  }
  heapifyUp(i) {
    while (i > 0) {
      if (this.heap[this.parent(i)][1] < this.heap[i][1]) break;
      if (this.heap[this.parent(i)][1] === this.heap[i][1] && this.heap[this.parent(i)][0] < this.heap[i][0]) break;

      this.swap(i, this.parent(i));
      i = this.parent(i);
    }
  }
  heapifyDown(i) {
    let min = i;
    const left = this.leftChild(i);
    const right = this.rightChild(i);

    if (left < this.heap.length) {
      if (this.heap[left][1] < this.heap[min][1]) min = left;
      if (this.heap[left][1] === this.heap[min][1] && this.heap[left][0] < this.heap[min][0]) min = left;
    }

    if (right < this.heap.length) {
      if (this.heap[right][1] < this.heap[min][1]) min = right;
      if (this.heap[right][1] === this.heap[min][1] && this.heap[right][0] < this.heap[min][0]) min = right;
    }

    if (min !== i) {
      this.swap(i, min);
      this.heapifyDown(min);
    }
  }
}

const queue = new MinHeap();
const answer = [];

for (let v of list) {
  if (v !== 0) {
    queue.push([v, Math.abs(v)]);
  } else {
    const min = queue.pop();
    answer.push(min[0]);
  }
}

console.log(answer.join("\n"));
