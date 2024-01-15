// 2583
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Silver/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [M, N, K] = input.shift().split(" ").map(Number);
const map = Array.from({ length: N }, () => new Array(M).fill(false));

for (let i = 0; i < K; i++) {
    const [x1, y1, x2, y2] = input.shift().split(" ").map(Number);
    for (let j = x1; j < x2; j++) {
        for (let k = y1; k < y2; k++) {
            map[j][k] = true;
        }
    }
}

const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

const dfs = (a, b) => {
    let count = 0;
    const stack = [];
    stack.push([a, b]);
    map[a][b] = true;

    while (stack.length) {
        const [x, y] = stack.pop();
        count++;
        for (let i = 0; i < 4; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];

            if (nx < 0 || nx >= N || ny < 0 || ny >= M) continue;
            if (!map[nx][ny]) {
                stack.push([nx, ny]);
                map[nx][ny] = true;
            }
        }
    }
    return count;
};

const answer = [];

for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
        if (!map[i][j]) {
            answer.push(dfs(i, j));
        }
    }
}

console.log(answer.length);
console.log(answer.sort((a, b) => a - b).join(" "));
