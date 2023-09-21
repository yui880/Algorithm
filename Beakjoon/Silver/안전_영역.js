// 2468
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Silver/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = parseInt(input.shift(), 10);
let max = 0;
let min = Infinity;
const arr = input.map((i) => {
    const temp = i.split(" ").map(Number);
    const tempMax = Math.max(...temp);
    const tempMin = Math.min(...temp);
    if (max < tempMax) max = tempMax;
    if (min > tempMin) min = tempMin;
    return temp;
});

console.log(max, min);

const solution = () => {
    const answer = [];
    const dx = [1, -1, 0, 0];
    const dy = [0, 0, 1, -1];

    const dfs = (x, y, index, visited) => {
        const stack = [[x, y]];
        visited[x][y] = true;

        while (stack.length) {
            const [a, b] = stack.pop();
            for (let i = 0; i < 4; i++) {
                const nx = a + dx[i];
                const ny = b + dy[i];

                if (nx >= 0 && nx < N && ny >= 0 && nx < N) {
                    if (arr[nx][ny] >= index && !visited[nx][ny]) {
                        visited[nx][ny] = true;
                        stack.push([nx, ny]);
                    }
                }
            }
        }
    };

    for (let i = min; i <= max; i++) {
        const visited = Array.from(Array(N), () => new Array(N).fill(false));
        let count = 0;
        for (let j = 0; j < N; j++) {
            for (let k = 0; k < N; k++) {
                if (arr[j][k] >= i && !visited[j][k]) {
                    dfs(j, k, i, visited);
                    count++;
                }
            }
        }
        answer.push(count);
    }
    return Math.max(...answer);
};

console.log(solution());
