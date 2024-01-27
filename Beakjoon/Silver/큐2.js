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
    push(val) {
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
    pop() {
        if (!this.first) return null;
        let temp = this.first;
        if (this.first === this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }

    empty() {
        return this.size === 0 ? 1 : 0;
    }

    front() {
        return this.first ? this.first.value : -1;
    }

    back() {
        return this.last ? this.last.value : -1;
    }
}

const N = parseInt(input[0], 10);

const answer = [];
const queue = new Queue();
for (let i = 1; i <= N; i++) {
    const [command, num] = input[i].split(" ");
    if (command === "push") queue.push(Number(num));
    if (command === "pop") answer.push(queue.pop() || -1);
    if (command === "size") answer.push(queue.size);
    if (command === "empty") answer.push(queue.empty());
    if (command === "front") answer.push(queue.front() || -1);
    if (command === "back") answer.push(queue.back() || -1);
}

console.log(answer.join("\n"));
