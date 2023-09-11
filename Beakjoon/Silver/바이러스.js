// 2606
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Silver/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = parseInt(input.shift());
const V = parseInt(input.shift());
const arr = input.map((item) => item.split(" ").map(Number));

const makeGraph = (arr) => {
    const graph = {};
    arr.forEach((nums) => {
        const [first, second] = nums;
        graph[first] ? graph[first].push(second) : (graph[first] = [second]);
        graph[second] ? graph[second].push(first) : (graph[second] = [first]);
    });
    for (let i = 1; i <= N; i++) {
        if (!graph[i]) graph[i] = [];
    }
    return graph;
};

const solution = () => {
    const graph = makeGraph(arr);
    const visited = new Array(N + 1).fill(false);

    const dfs = (start) => {
        const stack = [start];
        while (stack.length) {
            const node = stack.pop();
            visited[node] = true;
            for (const n of graph[node]) {
                if (!visited[n]) {
                    stack.push(n);
                }
            }
        }
    };
    dfs(1);
    return visited.filter((node) => node === true).length - 1;
};

console.log(solution());
