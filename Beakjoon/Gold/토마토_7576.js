// 7576

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [M, N] = input.shift().split(" ").map(Number);
let remains = 0;
const tomatoes = [];

for (let i = 0; i < N; i++) {
    const temp = input.shift().split(" ").map(Number);
    tomatoes.push(temp);
    remains += temp.filter((item) => item === 0).length;
}

const startTomatoes = [];
for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
        if (tomatoes[i][j] === 1) {
            startTomatoes.push([i, j, 1]);
        }
    }
}

const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

const solution = () => {
    const bfs = () => {
        const queue = [...startTomatoes];

        let idx = 0;
        while (queue.length > idx) {
            const [x, y, d] = queue[idx++];
            tomatoes[x][y] = d;

            for (let i = 0; i < 4; i++) {
                const nx = x + dx[i];
                const ny = y + dy[i];

                if (nx < 0 || nx >= N || ny < 0 || ny >= M) continue;
                if (tomatoes[nx][ny] === 0) {
                    tomatoes[nx][ny] = d + 1;
                    queue.push([nx, ny, d + 1]);
                    remains--;
                }
            }

            if (remains <= 0) return queue[queue.length - 1][2];
        }
        return queue[queue.length - 1][2];
    };

    if (startTomatoes.length === 0) return console.log(-1);
    const answer = bfs() - 1;
    remains > 0 ? console.log(-1) : console.log(answer);
};

solution();
