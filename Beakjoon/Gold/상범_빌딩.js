// 6593
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const dx = [1, -1, 0, 0, 0, 0];
const dy = [0, 0, -1, 1, 0, 0];
const dz = [0, 0, 0, 0, 1, -1];

while (true) {
    const [L, R, C] = input.shift().split(" ").map(Number);
    if (L === 0 && R === 0 && C === 0) break;

    let start = [0, 0, 0];
    const map = [];

    for (let i = 0; i < L; i++) {
        const temp = [];
        for (let j = 0; j < R; j++) {
            const list = input.shift().split("");
            temp.push(list);

            list.forEach((n, k) => {
                if (n === "S") {
                    start = [i, j, k];
                }
            });
        }
        map.push(temp);
        input.shift();
    }

    const bfs = (c, a, b) => {
        const queue = [];
        queue.push([c, a, b, 0]);

        let idx = 0;
        while (queue.length > idx) {
            const [z, x, y, count] = queue[idx++];
            map[z][x][y] = "1";

            for (let i = 0; i < 6; i++) {
                const nz = z + dz[i];
                const nx = x + dx[i];
                const ny = y + dy[i];

                if (nx < 0 || nx >= R || ny < 0 || ny >= C || nz < 0 || nz >= L) continue;
                if (map[nz][nx][ny] === ".") {
                    queue.push([nz, nx, ny, count + 1]);
                    map[nz][nx][ny] = "1";
                }
                if (map[nz][nx][ny] === "E") return count + 1;
            }
        }
        return -1;
    };

    const answer = bfs(start[0], start[1], start[2]);
    if (answer !== -1) {
        console.log(`Escaped in ${answer} minute(s).`);
    } else {
        console.log("Trapped!");
    }
}
