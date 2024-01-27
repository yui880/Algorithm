// 10866
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Silver/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class Deque {
    constructor() {
        this.count = 0;
        this.front = null;
        this.rear = null;
    }

    unshift(value) {
        const node = new Node(value);

        if (this.count === 0) {
            this.front = node;
            this.rear = node;
        } else {
            const prevFront = this.front;

            prevFront.prev = node;
            this.front = node;
            node.next = prevFront;
        }

        this.count += 1;
    }

    shift() {
        if (this.count === 0) return null;

        const value = this.front.value;

        if (this.count === 1) {
            this.count = 0;
            this.front = null;
            this.rear = null;
        } else {
            this.front = this.front.next;
            this.front.prev = null;
            this.count -= 1;
        }

        return value;
    }

    push(value) {
        const node = new Node(value);

        if (this.count === 0) {
            this.front = node;
            this.rear = node;
        } else {
            const prevRear = this.rear;

            prevRear.next = node;
            node.prev = prevRear;
            this.rear = node;
        }

        this.count += 1;
    }

    pop() {
        if (this.count === 0) return null;

        const value = this.rear.value;

        if (this.count === 1) {
            this.count = 0;
            this.front = null;
            this.rear = null;
        } else {
            this.rear = this.rear.prev;
            this.rear.next = null;
            this.count -= 1;
        }

        return value;
    }

    empty() {
        return this.count === 0 ? 1 : 0;
    }

    getFront() {
        return this.front ? this.front.value : null;
    }

    getBack() {
        return this.rear ? this.rear.value : null;
    }
}

const N = Number(input[0]);

const deque = new Deque();
const answer = [];

for (let i = 1; i <= N; i++) {
    const [command, num] = input[i].split(" ");

    if (command === "push_front") deque.unshift(Number(num));
    if (command === "pop_front") answer.push(deque.shift() || -1);
    if (command === "push_back") deque.push(Number(num));
    if (command === "pop_back") answer.push(deque.pop() || -1);
    if (command === "size") answer.push(deque.count);
    if (command === "empty") answer.push(deque.empty());
    if (command === "front") answer.push(deque.getFront() || -1);
    if (command === "back") answer.push(deque.getBack() || -1);
}

console.log(answer.join("\n"));
