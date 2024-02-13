// 21610
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const board = [];
for (let i = 0; i < N; i++) {
    board.push(input.shift().split(" ").map(Number));
}
const move = input.map((str) => str.split(" ").map(Number));

const dx = [0, -1, -1, -1, 0, 1, 1, 1];
const dy = [-1, -1, 0, 1, 1, 1, 0, -1];

const wx = [-1, -1, 1, 1];
const wy = [1, -1, -1, 1];

// 1. 구름 생성
let cloud = [
    [N - 1, 0],
    [N - 1, 1],
    [N - 2, 0],
    [N - 2, 1],
];

for (let i = 0; i < M; i++) {
    let [d, s] = move[i];
    // 2. 구름 이동하기
    const newCloud = [];
    const visited = Array.from({ length: N }, () => new Array(N).fill(false));
    cloud.forEach(([x, y]) => {
        const nx = (x + dx[d - 1] * s + N * 100) % N;
        const ny = (y + dy[d - 1] * s + N * 100) % N;

        visited[nx][ny] = true;
        newCloud.push([nx, ny]);
        // 3. 물의 양 증가
        board[nx][ny] += 1;
    });

    // 4. 물 복사 버그
    newCloud.forEach(([x, y]) => {
        let plusWater = 0;
        for (let i = 0; i < 4; i++) {
            const nx = x + wx[i];
            const ny = y + wy[i];

            if (nx < 0 || nx >= N || ny < 0 || ny >= N) continue;
            if (board[nx][ny] > 0) plusWater++;
        }

        board[x][y] += plusWater;
    });

    // 5. 새로운 구름 생성
    const tempCloud = [];
    for (let x = 0; x < N; x++) {
        for (let y = 0; y < N; y++) {
            if (board[x][y] >= 2 && !visited[x][y]) {
                board[x][y] -= 2;
                tempCloud.push([x, y]);
            }
        }
    }
    cloud = tempCloud;
}

let answer = 0;
for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
        answer += board[i][j];
    }
}

console.log(answer);

let [d, s] = move[i];
// 2. 구름 이동하기
const newCloud = [];
const visited = Array.from({ length: N }, () => new Array(N).fill(false));
cloud.forEach(([x, y]) => {
    const nx = (x + dx[d - 1] * s + N * 100) % N;
    const ny = (y + dy[d - 1] * s + N * 100) % N;

    visited[nx][ny] = true;
    newCloud.push([nx, ny]);
    // 3. 물의 양 증가
    board[nx][ny] += 1;
});
