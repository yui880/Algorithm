// 5472
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input.shift());
for (let i = 0; i < N; i++) {
    const [C, R] = input.shift().split(" ").map(Number);
    const map = [];
    for (let j = 0; j < R; j++) {
        map.push(input.shift().split(""));
    }

    let [jx, jy] = [0, 0];
    const fires = [];

    for (let i = 0; i < R; i++) {
        for (let j = 0; j < C; j++) {
            if (map[i][j] === "@") {
                jx = i;
                jy = j;
            }
            if (map[i][j] === "*") {
                fires.push([i, j, 0]);
            }
        }
    }

    const fireVisited = Array.from({ length: R }, () => new Array(C).fill(Infinity));
    const personVisited = Array.from({ length: R }, () => new Array(C).fill(false));

    const dx = [1, -1, 0, 0];
    const dy = [0, 0, 1, -1];

    const fire = () => {
        const queue = [...fires];
        fires.forEach(([x, y, t]) => {
            fireVisited[x][y] = t;
        });

        let idx = 0;
        while (queue.length > idx) {
            const [x, y, t] = queue[idx++];

            for (let i = 0; i < 4; i++) {
                const nx = x + dx[i];
                const ny = y + dy[i];

                if (nx < 0 || nx >= R || ny < 0 || ny >= C || map[nx][ny] !== ".") continue;
                if (fireVisited[nx][ny] === Infinity) {
                    queue.push([nx, ny, t + 1]);
                    fireVisited[nx][ny] = t + 1;
                }
            }
        }
    };

    const move = (a, b) => {
        const queue = [];
        queue.push([a, b, 0]);

        let idx = 0;
        while (queue.length > idx) {
            const [x, y, t] = queue[idx++];

            for (let i = 0; i < 4; i++) {
                const nx = x + dx[i];
                const ny = y + dy[i];

                if (nx < 0 || nx >= R || ny < 0 || ny >= C) return t + 1;
                if (map[nx][ny] !== ".") continue;
                if (t + 1 < fireVisited[nx][ny] && !personVisited[nx][ny]) {
                    queue.push([nx, ny, t + 1]);
                    personVisited[nx][ny] = t + 1;
                }
            }
        }

        return -1;
    };

    fire();
    const answer = move(jx, jy);
    answer === -1 ? console.log("IMPOSSIBLE") : console.log(answer);
}
