// 16920
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const T = Number(input[0]);

let visited;
let list;
let cnt = 0;
const answer = [];

const dfs = (node) => {
    visited[node] = true;
    const next = list[node];

    if (!visited[next]) dfs(next); // 다음 위치로 넘어감
    else if (!done[next]) {
        // 다음 위치 사이클 확인 한적 없음
        // 다음 위치에 방문한 적 있는데 사이클 확인한 적 없음 -> 사이클 한바퀴 돌았다는 의미
        for (let i = next; i !== node; i = list[i]) {
            cnt += 1;
        }

        cnt += 1;
    }
    done[node] = true; // node에서 시작하는 사이클 확인을 했다는 의미
};

for (let i = 1; i <= 2 * T; i += 2) {
    const N = Number(input[i]);
    list = [0, ...input[i + 1].split(" ").map((v) => Number(v))];
    visited = Array(N + 1).fill(false);
    done = Array(N + 1).fill(false);

    for (let j = 1; j <= N; j++) {
        if (!visited[j]) {
            dfs(j);
        }
    }

    answer.push(N - cnt);
    cnt = 0;
}

console.log(answer.join("\n"));
