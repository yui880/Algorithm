// 10026
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = parseInt(input.shift(), 10);
const origin = input.map((str) => str.split(""));
const blind = [...origin].map((str) =>
    str.map((c) => {
        if (c === "G") return "R";
        return c;
    })
);

const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

function solution() {
    const answer = [0, 0];
    const originVisited = Array.from({ length: N }, () => new Array(N).fill(false));
    const blindVisited = Array.from({ length: N }, () => new Array(N).fill(false));

    const dfs = (a, b, color, arr, visited) => {
        const stack = [];
        stack.push([a, b]);

        while (stack.length) {
            const [x, y] = stack.pop();
            visited[x][y] = true;

            for (let i = 0; i < 4; i++) {
                const nx = x + dx[i];
                const ny = y + dy[i];

                if (nx < 0 || nx >= N || ny < 0 || ny >= N) continue;
                if (arr[nx][ny] === color && !visited[nx][ny]) {
                    visited[nx][ny] = true;
                    stack.push([nx, ny]);
                }
            }
        }
    };

    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            if (!originVisited[i][j]) {
                dfs(i, j, origin[i][j], origin, originVisited);
                answer[0]++;
            }
        }
    }

    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            if (!blindVisited[i][j]) {
                dfs(i, j, blind[i][j], blind, blindVisited);
                answer[1]++;
            }
        }
    }

    console.log(answer.join(" "));
}

solution();
