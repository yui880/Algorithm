//9205
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const T = parseInt(input.shift(), 10);
const map = [];
while (input.length) {
    const N = parseInt(input.shift(), 10);
    const temp = [];
    for (let i = 0; i < N + 2; i++) {
        temp.push(input.shift().split(" ").map(Number));
    }
    map.push(temp);
}

const dx = [-50, 50, 0, 0];
const dy = [0, 0, -50, 50];

const bfs = (start, end) => {
    const [a, b] = start;
    const [c, d] = end;
    const visited = Array.from(Array(Math.abs(a - c)), () => new Array(Math.abs(b - d)).fill(false));

    const queue = [];
    queue.push([a, b, 19]);
    visited[a][b] = true;

    let idx = 0;
    while (queue.length > idx) {
        const [x, y, beers] = queue[idx++];
        for (let i = 0; i < 4; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];

            if (nx >= a && ny >= b && nx <= c && ny <= d) {
                if (!visited[nx - a][ny - b]) {
                    visited[nx - a][ny - b] = true;
                    queue.push([nx, ny, beers - 1]);
                }

                if (nx === c && ny === d) {
                    return true;
                }
            }
        }
    }
    return false;
};

bfs([0, 0], [1000, 1000]);

const solution = () => {};

function solution(land) {
    const bfs = (a, b) => {
        const queue = [];
        queue.push([a, b]);

        let idx = 0;
        while (queue.length > idx) {
            const [x, y] = [1, 2];
        }
    };
}
