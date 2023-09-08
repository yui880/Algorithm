const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Silver/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const T = parseInt(input.shift());
const arr = input.map((i) => i.split(" ").map(Number)).filter((n, i) => i % 2 !== 0);

const makeGraph = (arr) => {
    const graph = {};
    for (let i = 1; i <= arr.length; i++) {
        graph[i] = arr[i - 1];
    }
    return graph;
};

const permutationCycle = () => {
    const dfs = (graph, start, visited) => {
        const stack = [];
        stack.push(start);

        while (stack.length) {
            const node = stack.pop();
            const next = graph[node];
            if (!visited[next]) {
                visited[next] = true;
                stack.push(next);
            }
        }
    };

    for (let i = 0; i < T; i++) {
        let count = 0;
        const graph = makeGraph(arr[i]);
        const visited = new Array(arr[i].length + 1).fill(false);
        for (let j = 1; j <= arr[i].length; j++) {
            if (!visited[j]) {
                dfs(graph, j, visited);
                count++;
            }
        }
        console.log(count);
    }
};

permutationCycle();
