// 7569번

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [M, N, H] = input.shift().split(" ").map(Number);
let tomatoes = [];
for (let i = 0; i < H; i++) {
    let temp = [];
    for (let j = 0; j < N; j++) {
        temp.push(input[i * N + j].split(" ").map(Number));
    }
    tomatoes.push(temp);
}

const solution = () => {
    const dx = [1, -1, 0, 0, 0, 0];
    const dy = [0, 0, 1, -1, 0, 0];
    const dz = [0, 0, 0, 0, 1, -1];

    const bfs = () => {
        let unripeTomato = 0;
        let answer = 0;
        const queue = [];
        for (let i = 0; i < H; i++) {
            for (let j = 0; j < N; j++) {
                for (let k = 0; k < M; k++) {
                    if (tomatoes[i][j][k] === 1) queue.push([i, j, k, 0]);
                    if (tomatoes[i][j][k] === 0) unripeTomato++;
                }
            }
        }

        let idx = 0;
        while (queue.length > idx) {
            const [z, x, y, days] = queue[idx++];
            for (let i = 0; i < 6; i++) {
                const nz = z + dz[i];
                const nx = x + dx[i];
                const ny = y + dy[i];

                if (nx >= 0 && ny >= 0 && nz >= 0 && nx < N && ny < M && nz < H) {
                    if (tomatoes[nz][nx][ny] === 0) {
                        tomatoes[nz][nx][ny] = 1;
                        queue.push([nz, nx, ny, days + 1]);
                        unripeTomato--;
                    }
                }
            }
            answer = days;
        }
        return unripeTomato ? -1 : answer;
    };

    return bfs();
};

console.log(solution());
