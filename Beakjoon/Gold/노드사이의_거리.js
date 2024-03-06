// 1240
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const node = {};
for (let i = 0; i < N - 1; i++) {
    const [s, e, d] = input[i].split(" ").map(Number);
    node[s] ? node[s].push([e, d]) : (node[s] = [[e, d]]);
    node[e] ? node[e].push([s, d]) : (node[e] = [[s, d]]);
}

const wanted = [];
for (let i = N - 1; i < N + M - 1; i++) {
    wanted.push(input[i].split(" ").map(Number));
}

const dfs = (start, end) => {
    const visited = new Array(1001).fill(false);
    const stack = [];
    stack.push([start, 0]);
    visited[start] = true;

    while (stack.length) {
        const [n, d] = stack.pop();

        if (n === end) {
            return d;
        }

        if (node[n]) {
            node[n].forEach(([next, distance]) => {
                if (!visited[next]) {
                    stack.push([next, d + distance]);
                    visited[next] = true;
                }
            });
        }
    }
    return 0;
};

const answer = [];
wanted.forEach(([s, e]) => {
    answer.push(dfs(s, e));
});

console.log(answer.join("\n"));
