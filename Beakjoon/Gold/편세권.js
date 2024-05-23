// 31849
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let idx = 0;

const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

const [N, M, R, C] = input[idx++].split(" ").map(Number);

const rooms = [];
const stores = [];

for (let i = 0; i < R; i++) {
    const [a, b, p] = input[idx++].split(" ").map(Number);
    rooms.push([a - 1, b - 1, p]);
}
for (let i = 0; i < C; i++) {
    const [c, d] = input[idx++].split(" ").map(Number);
    stores.push([c - 1, d - 1]);
}

const bfs = () => {
    const queue = [];
    const distance = Array.from({ length: N }, () => new Array(M).fill(Infinity));

    stores.forEach(([x, y]) => {
        queue.push([x, y]);
        distance[x][y] = 0;
    });

    let id = 0;
    while (queue.length > id) {
        const [x, y] = queue[id++];

        for (let i = 0; i < 4; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];

            if (nx < 0 || nx >= N || ny < 0 || ny >= M) continue;
            if (distance[x][y] + 1 < distance[nx][ny]) {
                distance[nx][ny] = distance[x][y] + 1;
                queue.push([nx, ny]);
            }
        }
    }

    return distance;
};

const distance = bfs();
let answer = Infinity;

rooms.forEach(([x, y, p]) => {
    answer = Math.min(answer, distance[x][y] * p);
});

console.log(answer);
