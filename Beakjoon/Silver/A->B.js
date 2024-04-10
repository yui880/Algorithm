// 16953
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Silver/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [a, b] = input.shift().split(" ").map(Number);

let answer = Infinity;

const bfs = (n) => {
    const queue = [];
    queue.push([n, 0]);
    const visited = new Set();

    let idx = 0;
    while (queue.length > idx) {
        const [num, count] = queue[idx++];

        if (num === b) {
            answer = Math.min(answer, count);
            return;
        }

        if (num * 2 <= b && !visited.has(num * 2)) {
            queue.push([num * 2, count + 1]);
            visited.add(num * 2);
        }
        const temp = Number(num.toString() + "1");
        if (temp <= b && !visited.has(temp)) {
            queue.push([temp, count + 1]);
            visited.add(temp);
        }
    }
};

bfs(a, 0);
console.log(answer !== Infinity ? answer + 1 : -1);
