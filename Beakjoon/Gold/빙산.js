// 2573
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input.shift().split(" ").map(Number);
let iceberg = input.map((i) => i.split(" ").map(Number));

const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

const meltIce = (temp) => {
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            if (iceberg[i][j] > 0) {
                let count = 0;
                for (let k = 0; k < 4; k++) {
                    const nx = i + dx[k];
                    const ny = j + dy[k];

                    if (nx >= 0 && nx < N && ny >= 0 && ny < M) {
                        if (iceberg[nx][ny] === 0) {
                            count++;
                        }
                    }
                }
                if (temp[i][j] < count) temp[i][j] = 0;
                else temp[i][j] -= count;
            }
        }
    }
    return temp;
};

const dfs = (x, y, temp, visited) => {
    const stack = [];
    stack.push([x, y]);
    visited[x][y] = true;

    while (stack.length) {
        const [a, b] = stack.pop();
        for (let i = 0; i < 4; i++) {
            const nx = a + dx[i];
            const ny = b + dy[i];
            if (nx >= 0 && nx < N && ny >= 0 && ny < M) {
                if (temp[nx][ny] > 0 && !visited[nx][ny]) {
                    stack.push([nx, ny]);
                    visited[nx][ny] = true;
                }
            }
        }
    }
};

const countIceberg = (temp) => {
    let ice = 0;
    const visited = Array.from(new Array(N), () => new Array(M).fill(false));
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            if (temp[i][j] > 0 && !visited[i][j]) {
                dfs(i, j, temp, visited);
                ice++;
            }
        }
    }
    return ice;
};

const solution = () => {
    if (countIceberg(iceberg) >= 2) return 0;
    let answer = 1;
    while (true) {
        const tempArr = iceberg.map((v) => [...v]);
        const changed = meltIce(tempArr);
        const count = countIceberg(changed);

        if (count >= 2) return answer;
        if (count === 0) return 0;
        iceberg = changed.map((v) => [...v]);
        answer++;
    }
};

console.log(solution());
