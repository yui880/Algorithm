// 12851
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, K] = input.shift().split(" ").map(Number);
const max = 100001;
const visited = new Array(max).fill(false);
const answer = [];

const bfs = (start) => {
    const queue = [];
    queue.push([start, 0]);
    visited[start] = true;

    let idx = 0;
    while (queue.length > idx) {
        const [position, time] = queue[idx++];
        visited[position] = true;

        if (position === K) {
            answer.push(time);
            continue;
        }

        const calc = [position * 2, position - 1, position + 1];
        for (let i = 0; i < 3; i++) {
            if (calc[i] <= max && calc[i] >= 0 && !visited[calc[i]]) {
                queue.push([calc[i], time + 1]);
            }
        }
    }
};

if (N >= K) {
    console.log(N - K);
    console.log(1);
} else {
    bfs(N);
    const min = Math.min(...answer);
    const count = answer.filter((val) => val === min).length;
    console.log(min);
    console.log(count);
}
