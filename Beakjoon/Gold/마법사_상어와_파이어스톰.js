// 20058
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let [N, Q] = input.shift().split(" ").map(Number);
let levels = input.pop().split(" ").map(Number);
const board = input.map((str) => str.split(" ").map(Number));

const rotate = (arr) => {
    const N = arr.length;

    const rotated = [];
    for (let i = 0; i < N; i++) {
        rotated[i] = new Array(N);
        for (let j = 0; j < N; j++) {
            rotated[i][j] = arr[N - j - 1][i];
        }
    }

    return rotated;
};

const fireStrom = (x, y, lv) => {
    const splited = [];
    for (let i = 0; i < lv; i++) {
        splited[i] = new Array(lv);
        for (let j = 0; j < lv; j++) {
            splited[i][j] = board[x + i][y + j];
        }
    }

    const rotated = rotate(splited);

    for (let i = 0; i < lv; i++) {
        for (let j = 0; j < lv; j++) {
            board[x + i][y + j] = rotated[i][j];
        }
    }
};

N = 2 ** N;
levels = levels.map((v) => 2 ** v);

const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

for (let k = 0; k < Q; k++) {
    const level = levels[k];
    if (level === 0) continue;

    for (let i = 0; i < N; i += level) {
        for (let j = 0; j < N; j += level) {
            fireStrom(i, j, level);
        }
    }

    const iceList = [];

    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            if (board[i][j] === 0) continue;
            let iceCount = 0;

            for (let l = 0; l < 4; l++) {
                const nx = i + dx[l];
                const ny = j + dy[l];

                if (nx < 0 || nx >= N || ny < 0 || ny >= N) continue;
                if (board[nx][ny] > 0) iceCount++;
            }

            if (iceCount < 3) {
                iceList.push([i, j]);
            }
        }
    }

    iceList.forEach(([x, y]) => {
        board[x][y] -= 1;
    });
}

const visited = Array.from({ length: N }, () => new Array(N).fill(false));
let max = 0;

const bfs = (a, b) => {
    let count = 0;
    const queue = [];
    queue.push([a, b]);
    visited[a][b] = true;

    let idx = 0;
    while (queue.length > idx) {
        const [x, y] = queue[idx++];
        count++;

        for (let i = 0; i < 4; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];

            if (nx < 0 || nx >= N || ny < 0 || ny >= N) continue;
            if (!visited[nx][ny] && board[nx][ny] > 0) {
                queue.push([nx, ny]);
                visited[nx][ny] = true;
            }
        }
    }

    return count;
};

for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
        if (!visited[i][j] && board[i][j] !== 0) {
            const temp = bfs(i, j);
            max = Math.max(max, temp);
        }
    }
}

const sum = board.flat().reduce((acc, cur) => acc + cur, 0);
console.log(sum);
console.log(max);
