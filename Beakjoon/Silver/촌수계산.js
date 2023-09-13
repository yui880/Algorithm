// 2644

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Silver/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = parseInt(input.shift(), 10);
const [start, end] = input.shift().split(" ").map(Number);
const m = parseInt(input.shift(), 10);
const arr = input.map((item) => item.split(" ").map(Number));

const makeGraph = (arr) => {
    const graph = {};
    for (const item of arr) {
        const [first, second] = item;
        graph[first] ? graph[first].push(second) : (graph[first] = [second]);
        graph[second] ? graph[second].push(first) : (graph[second] = [first]);
    }
    for (let i = 1; i <= n; i++) {
        if (!graph[i]) graph[i] = [];
    }

    return graph;
};

const solution = () => {
    const graph = makeGraph(arr);

    const bfs = (root) => {
        const visited = new Array(n + 1).fill(-1);
        const queue = [root];
        visited[root] = 0;

        while (queue.length) {
            const node = queue.shift();

            for (const n of graph[node]) {
                if (visited[n] === -1) {
                    queue.push(n);
                    visited[n] = visited[node] + 1;
                }

                if (n === end) {
                    return visited[n];
                }
            }
        }
        return -1;
    };

    return bfs(start);
};

console.log(solution());
