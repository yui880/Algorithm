// 2178

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Silver/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m] = input.shift().split(" ").map(Number);
const arr = input.map((i) => i.split("").map(Number));

const solution = () => {
    const dx = [1, -1, 0, 0];
    const dy = [0, 0, 1, -1];

    const bfs = () => {
        const queue = [[0, 0]];

        while (queue.length) {
            const [x, y] = queue.shift();

            for (let i = 0; i < 4; i++) {
                const nx = x + dx[i];
                const ny = y + dy[i];

                if (nx >= 0 && nx < n && ny >= 0 && ny < m) {
                    if (arr[nx][ny] === 1) {
                        arr[nx][ny] = arr[x][y] + 1;
                        queue.push([nx, ny]);
                    }
                }

                if (nx === n - 1 && ny === m - 1) return arr[nx][ny];
            }
        }
        return -1;
    };

    return bfs();
};

console.log(solution());
