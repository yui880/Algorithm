// 12851
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const [R, C, D] = input.shift().split(" ").map(Number);
const map = input.map((v) => v.split(" ").map(Number));

const visited = Array.from(Array(N), () => Array(M).fill(0));
const getPositivePosition = (num) => (num < 0 ? num + 4 : num);

const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];

const dfs = (a, b, dir) => {
    let count = 0;
    const queue = [];
    queue.push([a, b, dir]);

    let idx = 0;
    while (queue.length > idx) {
        let [x, y, d] = queue[idx++];

        if (!map[x][y] && !visited[x][y]) {
            count++;
            visited[x][y] = 1;
        }
        for (let i = 0; i < 4; i++) {
            d = getPositivePosition(--d);
            const nx = x + dx[d];
            const ny = y + dy[d];

            if (!map[nx][ny] && !visited[nx][ny]) {
                queue.push([nx, ny, d]);
                break;
            }

            if (i === 3) {
                const backDir = getPositivePosition(d - 2);
                const nx = x + dx[backDir];
                const ny = y + dy[backDir];

                if (!map[nx][ny]) {
                    queue.push([nx, ny, d]);
                    break;
                }
            }
        }
    }

    return count;
};

console.log(dfs(R, C, D));
