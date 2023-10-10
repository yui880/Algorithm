// 1926
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Silver/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const [N, M] = input.shift().split(" ").map(Number);
const paper = input.map((item) => item.split(" ").map(Number));

const solution = () => {
    const dx = [1, -1, 0, 0];
    const dy = [0, 0, 1, -1];
    const visited = Array.from(Array(N), () => new Array(M).fill(false));

    const bfs = (a, b) => {
        const queue = [];
        queue.push([a, b]);
        visited[a][b] = true;

        let idx = 0;
        while (queue.length > idx) {
            const [x, y] = queue[idx++];
            for (let i = 0; i < 4; i++) {
                const nx = x + dx[i];
                const ny = y + dy[i];

                if (nx >= 0 && ny >= 0 && nx < N && ny < M) {
                    if (paper[nx][ny] === 1 && !visited[nx][ny]) {
                        visited[nx][ny] = true;
                        queue.push([nx, ny]);
                    }
                }
            }
        }

        return idx;
    };

    let count = 0;
    let max = 0;
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            if (paper[i][j] === 1 && !visited[i][j]) {
                const area = bfs(i, j);
                if (area > max) {
                    max = area;
                }
                count++;
            }
        }
    }
    console.log(count);
    console.log(max);
};

solution();
