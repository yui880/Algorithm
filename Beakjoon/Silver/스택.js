// 10828
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Silver/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

class Stack {
    constructor() {
        this.list = [];
        this.position = 0;
    }

    push(num) {
        this.list.push(num);
        this.position++;
    }

    pop() {
        const temp = this.list.pop();

        if (temp === undefined) {
            return -1;
        } else {
            this.position--;
            return temp;
        }
    }

    size() {
        return this.position;
    }

    empty() {
        return this.position === 0 ? 1 : 0;
    }

    top() {
        if (this.position > 0) {
            return this.list[this.position - 1];
        } else {
            return -1;
        }
    }
}

const N = Number(input[0]);
const s = new Stack();
const answer = [];

for (let i = 1; i <= N; i++) {
    const [command, num] = input[i].split(" ");

    if (command === "push") s.push(Number(num));
    else if (command === "pop") answer.push(s.pop());
    else if (command === "top") answer.push(s.top());
    else if (command === "size") answer.push(s.size());
    else if (command === "empty") answer.push(s.empty());
    else if (command === "top") answer.push(s.top());
}

console.log(answer.join("\n"));
