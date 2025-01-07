const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = Number(input.shift());
const list = input.map(Number);

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
    return ([this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]]);
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
    // 부모 노드의 값이 더 크면 교환
    while (i > 0 && this.heap[this.parent(i)] > this.heap[i]) {
      this.swap(i, this.parent(i));
      this.heapifyUp(this.parent(i));
    }
  }

  heapifyDown(i) {
    let minIndex = i;
    const left = this.leftChild(i);
    const right = this.rightChild(i);

    // 자식 노드 중 더 작은 값을 가진 쪽이랑 교환
    if (left < this.heap.length && this.heap[left] < this.heap[minIndex]) {
      minIndex = left;
    }
    if (right < this.heap.length && this.heap[right] < this.heap[minIndex]) {
      minIndex = right;
    }

    if (minIndex !== i) {
      this.swap(i, minIndex);
      this.heapifyDown(minIndex);
    }
  }
}

const h = new MinHeap();
list.forEach((val) => h.push(val));

let answer = 0;
while (h.heap.length !== 1) {
  const first = h.pop();
  const second = h.pop();

  answer += first + second;
  h.push(first + second);
}

console.log(answer);
