// 17141
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const board = [];
const virus = [];

let zeroCount = 0;

for (let i = 0; i < N; i++) {
    const temp = input.shift().split(" ");
    const row = temp.map((val, j) => {
        if (val === "0") {
            zeroCount++;
            return 0;
        } else if (val === "1") {
            return "-";
        } else if (val === "2") {
            virus.push([i, j]);
            zeroCount++;
            return 0;
        }
    });

    board.push(row);
}

const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

const bfs = (startList) => {
    let cnt = zeroCount;
    let max = 0;
    const queue = [];
    const visited = Array.from({ length: N }, () => new Array(N).fill(false));

    startList.forEach((val) => {
        const [x, y] = virus[val];
        queue.push([x, y, 0]);
        visited[x][y] = true;
        cnt--;
    });

    let idx = 0;
    while (queue.length > idx) {
        const [x, y, c] = queue[idx++];

        for (let i = 0; i < 4; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];

            if (nx < 0 || nx >= N || ny < 0 || ny >= N) continue;
            if (board[nx][ny] === 0 && !visited[nx][ny]) {
                visited[nx][ny] = true;
                queue.push([nx, ny, c + 1]);
                max = Math.max(max, c + 1);
                cnt--;
            }
            if (cnt <= 0) {
                break;
            }
        }
    }

    if (cnt <= 0) return max;
    else return false;
};

let totalMin = Infinity;
const arr = new Array(M);
const isPossible = Array(M).fill(false);

const combination = (at, count) => {
    if (count === M) {
        const temp = bfs(arr);
        if (temp === false) return;
        totalMin = Math.min(temp, totalMin);
        return;
    }

    for (let i = at; i < virus.length; i++) {
        if (!isPossible[i]) {
            arr[count] = i;
            isPossible[i] = true;
            combination(at + 1, count + 1);
            isPossible[i] = false;
        }
    }
};

combination(0, 0);
console.log(totalMin !== Infinity ? totalMin : -1);
