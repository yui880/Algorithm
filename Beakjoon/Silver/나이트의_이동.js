// 7562
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Silver/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const dx = [-2, -1, -2, -1, 1, 2, 1, 2];
const dy = [1, 2, -1, -2, -2, -1, 2, 1];

const T = parseInt(input.shift(), 10);

for (let i = 0; i < T; i++) {
    const N = parseInt(input.shift(), 10);
    const [cX, cY] = input.shift().split(" ").map(Number);
    const [dX, dY] = input.shift().split(" ").map(Number);

    const visited = Array.from({ length: N }, () => new Array(N).fill(false));

    const bfs = () => {
        const queue = [];
        queue.push([cX, cY, 0]);

        let idx = 0;
        while (queue.length > idx) {
            const [x, y, count] = queue[idx++];
            visited[x][y] = true;

            for (let i = 0; i < 8; i++) {
                const nx = x + dx[i];
                const ny = y + dy[i];

                if (nx < 0 || nx >= N || ny < 0 || ny >= N) continue;
                if (!visited[nx][ny]) {
                    visited[nx][ny] = true;
                    queue.push([nx, ny, count + 1]);
                }
                if (nx === dX && ny === dY) return count + 1;
            }
        }
    };

    if (cX === dX && cY === dY) console.log(0);
    else console.log(bfs());
}
