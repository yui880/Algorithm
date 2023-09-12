// 2667

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Silver/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = parseInt(input.shift());
const arr = input.map((row) => row.split("").map(Number));

const solution = () => {
    const answer = [];
    const dx = [1, -1, 0, 0];
    const dy = [0, 0, 1, -1];

    const bfs = (a, b) => {
        let count = 1;
        const queue = [[a, b]];
        arr[a][b] = 2;

        while (queue.length) {
            const [x, y] = queue.shift();
            for (let i = 0; i < 4; i++) {
                const nx = x + dx[i];
                const ny = y + dy[i];
                if (nx >= N || ny >= N || nx < 0 || ny < 0) continue;
                if (arr[nx][ny] === 1) {
                    queue.push([nx, ny]);
                    arr[nx][ny] = 2;
                    count++;
                }
            }
        }
        return count;
    };

    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            if (arr[i][j] === 1) {
                answer.push(bfs(i, j));
            }
        }
    }
    answer.sort((a, b) => a - b);
    console.log(answer.length);
    for (const home of answer) {
        console.log(home);
    }
};
solution();
