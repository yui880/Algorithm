const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = +input.shift();
const time = input.map((str) => str.split(" ").map(Number));

class MinHeap {
  constructor() {
    this.heap = [];
  }
  parent(i) {
    return Math.floor((i - 1) / 2);
  }
  leftChild(i) {
    return i * 2 + 1;
  }
  rightChild(i) {
    return i * 2 + 2;
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
    while (i > 0 && this.heap[i] < this.heap[this.parent(i)]) {
      this.swap(i, this.parent(i));
      i = this.parent(i);
    }
  }

  heapifyDown(i) {
    let minIndex = i;
    let left = this.leftChild(i);
    let right = this.rightChild(i);

    if (left < this.heap.length && this.heap[left] < this.heap[minIndex]) {
      minIndex = left;
    }

    if (right < this.heap.length && this.heap[right] < this.heap[minIndex]) {
      minIndex = right;
    }

    if (minIndex === i) return;

    this.swap(i, minIndex);
    this.heapifyDown(minIndex);
  }

  isEmpty() {
    return this.heap.length === 0;
  }
}

const timeList = [];
time.forEach(([s, e], i) => {
  timeList.push([s, i, false]);
  timeList.push([e, i, true]);
});

timeList.sort((a, b) => a[0] - b[0]);

const computer = [];
const minheap = new MinHeap();

const used = Array(n).fill(-1);

for (const [cur, index, isEnd] of timeList) {
  if (!isEnd) {
    if (minheap.isEmpty()) {
      computer.push(1); // 새로운 컴퓨터 할당
      used[index] = computer.length - 1; // 사용자가 어떤 컴퓨터 사용중인지 확인
    } else {
      const comIndex = minheap.pop();
      used[index] = comIndex;
      computer[comIndex]++;
    }
  } else {
    const comIndex = used[index]; // 사용하고 있던 컴퓨터 번호
    minheap.push(comIndex);
  }
}

console.log(computer.length);
console.log(computer.join(" "));
