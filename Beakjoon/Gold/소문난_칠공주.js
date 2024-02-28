// 1941
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const board = input.map((str) => str.split(""));

const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

let arr = new Array(7);
let answer = 0;

const permutation = (at, count, sCount) => {
    if (count === 7) {
        if (sCount >= 4) bfs([...arr]);
        return;
    }

    for (let i = at; i < 25; i++) {
        arr[count] = i;
        const isSom = board[Math.floor(i / 5)][i % 5] === "S" ? 1 : 0;
        permutation(i + 1, count + 1, sCount + isSom);
    }
};

const bfs = (list) => {
    const queue = [];
    const visited = Array(7).fill(false);
    queue.push(list[0]);
    visited[0] = true;
    let count = 1;

    let idx = 0;
    while (queue.length > idx) {
        const node = queue[idx++];
        const x = Math.floor(node / 5);
        const y = node % 5;

        for (let i = 0; i < 4; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];

            for (let j = 1; j < 7; j++) {
                const next = list[j];
                const nextX = Math.floor(next / 5);
                const nextY = next % 5;

                if (!visited[j] && nx == nextX && ny === nextY) {
                    visited[j] = true;
                    queue.push(list[j]);
                    count++;
                }
            }
        }
    }

    if (count === 7) {
        answer++;
    }
};

permutation(0, 0, 0);
console.log(answer);
