const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Silver/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

const T = parseInt(input.shift(), 10);

for (let i = 0; i < T; i++) {
    const [M, N, K] = input.shift().split(" ").map(Number);

    const arr = Array.from({ length: N }, () => new Array(M).fill(0));

    for (let j = 0; j < K; j++) {
        const [x, y] = input.shift().split(" ").map(Number);
        arr[y][x] = 1;
    }

    const visited = Array.from({ length: N }, () => new Array(M).fill(false));

    const dfs = (x, y) => {
        const stack = [];
        stack.push([x, y]);

        while (stack.length) {
            const [a, b] = stack.pop();
            visited[a][b] = true;

            for (let i = 0; i < 4; i++) {
                const nx = a + dx[i];
                const ny = b + dy[i];

                if (nx < 0 || nx >= N || ny < 0 || ny >= M) continue;
                if (arr[nx][ny] === 1 && !visited[nx][ny]) {
                    stack.push([nx, ny]);
                }
            }
        }
    };

    let count = 0;
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            if (!visited[i][j] && arr[i][j] === 1) {
                dfs(i, j);
                count++;
            }
        }
    }

    console.log(count);
}
