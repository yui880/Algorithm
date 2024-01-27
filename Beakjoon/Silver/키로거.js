// 5397
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Silver/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = parseInt(input.shift(), 10);
for (let i = 0; i < N; i++) {
    const str = [...input[i]];
    const front = [];
    const back = [];

    // front - 커서 - back
    str.forEach((v) => {
        if (v === "<") {
            if (front.length > 0) back.push(front.pop());
        } else if (v === ">") {
            if (back.length > 0) front.push(back.pop());
        } else if (v === "-") {
            if (front.length > 0) front.pop();
        } else {
            front.push(v);
        }
    });

    console.log(front.join("") + back.reverse().join(""));
}

// class Node {
//     constructor(val) {
//         this.val = val;
//         this.next = null;
//     }
// }

// class SinglyLinkedList {
//     constructor() {
//         this.head = null;
//         this.tail = null;
//         this.length = 0;
//     }
//     push(val) {
//         let newNode = new Node(val);
//         if (!this.head) {
//             this.head = newNode;
//             this.tail = this.head;
//         } else {
//             this.tail.next = newNode;
//             this.tail = newNode;
//         }
//         this.length++;
//         return this;
//     }
//     pop() {
//         if (!this.head) return undefined;
//         let current = this.head;
//         let newTail = current;
//         while (current.next) {
//             newTail = current;
//             current = current.next;
//         }
//         this.tail = newTail;
//         this.tail.next = null;
//         this.length--;
//         if (this.length === 0) {
//             this.head = null;
//             this.tail = null;
//         }
//         return current;
//     }

//     shift() {
//         if (!this.head) return undefined;
//         let currentHead = this.head;
//         this.head = currentHead.next;
//         this.length--;
//         if (this.length === 0) {
//             this.tail = null;
//         }
//         return currentHead;
//     }

//     unshift(val) {
//         let newNode = new Node(val);
//         if (this.head) {
//             newNode.next = this.head;
//             this.head = newNode;
//         } else {
//             this.head = newNode;
//             this.tail = this.head;
//         }
//         this.length++;
//         return newNode;
//     }

//     get(index) {
//         if (index < 0 || index >= this.length) return null;
//         let counter = 0;
//         let current = this.head;
//         while (counter !== index) {
//             current = current.next;
//             counter++;
//         }
//         return current;
//     }

//     set(index, val) {
//         let foundNode = this.get(index);
//         if (foundNode) {
//             foundNode.val = val;
//             return true;
//         }
//         return false;
//     }

//     insert(index, val) {
//         if (index < 0 || index > this.length) return false;
//         if (index === this.length) return !!this.push(val);
//         if (index === 0) return !!this.unshift(val);

//         var newNode = new Node(val);
//         var prev = this.get(index - 1);
//         var temp = prev.next;
//         prev.next = newNode;
//         newNode.next = temp;
//         this.length++;
//         return true;
//     }

//     remove(index) {
//         if (index < 0 || index >= this.length) return undefined;
//         if (index === 0) return this.shift();
//         if (index === this.length - 1) return this.pop();
//         var previousNode = this.get(index - 1);
//         var removed = previousNode.next;
//         previousNode.next = removed.next;
//         this.length--;
//         return removed;
//     }

//     reverse() {
//         let node = this.head;
//         this.head = this.tail;
//         this.tail = node;
//         let prev = null; //tail의 next가 null이라서
//         let next;
//         for (let i = 0; i < this.length; i++) {
//             next = node.next; //node는 바뀌기 전 this.head에서 시작
//             node.next = prev;
//             prev = node;
//             node = next;
//         }
//         return this;
//     }
// }

// const N = parseInt(input.shift(), 10);

// for (let i = 0; i < N; i++) {
//     let idx = 0;
//     const str = [...input.shift()];
//     const linkedList = new SinglyLinkedList();

//     str.forEach((v) => {
//         if (v === "<") {
//             if (idx > 0) idx--;
//         } else if (v === ">") {
//             if (idx < linkedList.length) idx++;
//         } else if (v === "-") {
//             if (idx > 0) linkedList.remove(--idx);
//         } else {
//             linkedList.insert(idx++, v);
//         }
//     });

//     let answer = "";
//     let current = linkedList.head;
//     while (current) {
//         answer += current.val;
//         current = current.next;
//     }

//     console.log(answer);
// }
