// 10845
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Silver/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

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

class Queue {
    constructor() {
        this.list = [];
    }

    push(num) {
        this.list.push(num);
    }

    pop() {
        return this.list.shift() || -1;
    }

    size() {
        return this.list.length;
    }

    empty() {
        return this.list.length === 0 ? 1 : 0;
    }

    front() {
        return this.list[0] || -1;
    }

    back() {
        return this.list[this.list.length - 1] || -1;
    }
}

const N = parseInt(input[0], 10);

const answer = [];
const queue = new Queue();
for (let i = 1; i <= N; i++) {
    const [command, num] = input[i].split(" ");
    if (command === "push") queue.push(Number(num));
    if (command === "pop") answer.push(queue.pop());
    if (command === "size") answer.push(queue.size());
    if (command === "empty") answer.push(queue.empty());
    if (command === "front") answer.push(queue.front());
    if (command === "back") answer.push(queue.back());
}

console.log(answer.join("\n"));
