// 1260

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Silver/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m, root] = input.shift().split(" ").map(Number);
const arr = input.map((i) => i.split(" ").map(Number));

const makeGraph = (list) => {
    let graph = {};
    for (const item of list) {
        const [first, second] = item;
        graph[first] ? graph[first].push(second) : (graph[first] = [second]);
        graph[second] ? graph[second].push(first) : (graph[second] = [first]);
    }
    for (const item in graph) {
        graph[item].sort((a, b) => a - b);
    }
    for (let i = 1; i <= n; i++) {
        if (!graph[i]) graph[i] = [];
    }
    return graph;
};

const iterativeDfs = (graph, start) => {
    const visited = new Array(n).fill(false);
    const stack = [];
    const order = [];

    stack.push(start);

    while (stack.length) {
        const v = stack.pop();
        if (!visited[v]) {
            visited[v] = true;
            order.push(v);

            for (const node of graph[v]) {
                if (!visited[node]) {
                    stack.push(node);
                }
            }
        }
    }

    return order;
};

const order = [];
const recursiveDfs = (graph, start, visited) => {
    visited[start] = true;
    order.push(start);

    for (const node of graph[start]) {
        if (!visited[node]) {
            recursiveDfs(graph, node, visited);
        }
    }
};

const bfs = (graph, start) => {
    const visited = new Array(n).fill(false);
    const queue = [];
    const order = [];

    queue.push(start);
    visited[start] = true;

    while (queue.length) {
        const v = queue.shift();
        order.push(v);

        for (const node of graph[v]) {
            if (!visited[node]) {
                visited[node] = true;
                queue.push(node);
            }
        }
    }
    return order;
};

const solution = () => {
    const graph = makeGraph(arr);
    const visited = new Array(n).fill(false);

    recursiveDfs(graph, root, visited);
    const dfsAnswer = order;
    const bfsAnswer = bfs(graph, root);
    console.log(dfsAnswer.join(" "));
    console.log(bfsAnswer.join(" "));
};

solution();
