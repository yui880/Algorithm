// 1697

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Silver/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let [N, K] = input.pop().split(" ").map(Number);

const calc = (idx, value) => {
    if (idx === 0) return value + 1;
    if (idx === 1) return value - 1;
    if (idx === 2) return value * 2;
};

const solution = () => {
    const visited = new Array(100001).fill(false);
    const bfs = (start) => {
        const queue = [];
        queue.push([start, 0]);
        visited[start] = true;

        let idx = 0;
        while (queue.length > idx) {
            const [node, time] = queue[idx++];
            for (let i = 0; i < 3; i++) {
                const newNode = calc(i, node);
                if (!visited[newNode] && newNode <= 100000) {
                    visited[newNode] = true;
                    queue.push([newNode, time + 1]);
                }

                if (newNode === K) {
                    return time + 1;
                }
            }
        }
    };
    if (N === K) return 0;
    return bfs(N);
};

console.log(solution());
