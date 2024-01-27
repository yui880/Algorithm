// 1600
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const K = Number(input[0]);
const [W, H] = input[1].split(" ").map(Number);
const board = [];
for (let i = 2; i < input.length; i++) {
    board.push(input[i].split(" "));
}
const visited = Array.from({ length: H }, () => Array.from({ length: W }, () => new Array(K + 1).fill(false)));

const kx = [-2, -2, -1, -1, 1, 1, 2, 2];
const ky = [1, -1, 2, -2, 2, -2, 1, -1];

const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

const bfs = (startX, startY) => {
    if (H === 1 && W === 1) return 0;
    const queue = [];
    queue.push([startX, startY, K, 0]);
    visited[startX][startY] = true;

    let idx = 0;
    while (queue.length > idx) {
        const [x, y, remain, count] = queue[idx++];

        if (remain > 0) {
            for (let i = 0; i < kx.length; i++) {
                const nx = x + kx[i];
                const ny = y + ky[i];

                if (nx >= 0 && nx < H && ny >= 0 && ny < W) {
                    if (!visited[nx][ny][remain - 1] && board[nx][ny] === "0") {
                        queue.push([nx, ny, remain - 1, count + 1]);
                        visited[nx][ny][remain - 1] = true;
                    }
                }

                if (nx === H - 1 && ny === W - 1) {
                    return count + 1;
                }
            }
        }

        for (let i = 0; i < 4; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];

            if (nx >= 0 && nx < H && ny >= 0 && ny < W) {
                if (!visited[nx][ny][remain] && board[nx][ny] === "0") {
                    queue.push([nx, ny, remain, count + 1]);
                    visited[nx][ny][remain] = true;
                }
            }
            if (nx === H - 1 && ny === W - 1) {
                return count + 1;
            }
        }
    }

    return -1;
};

console.log(bfs(0, 0));
