// 13549
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, K] = input.shift().split(" ").map(Number);
const max = 100001;
const visited = new Array(max).fill(false);

const bfs = (start) => {
    const queue = [];
    queue.push([start, 0]);
    visited[start] = true;

    let idx = 0;
    while (queue.length > idx) {
        const [position, time] = queue[idx++];

        if (position * 2 < max && !visited[position * 2]) {
            queue.push([position * 2, time]);
            visited[position * 2] = true;
        }
        if (position - 1 >= 0 && !visited[position - 1]) {
            queue.push([position - 1, time + 1]);
            visited[position - 1] = true;
        }
        if (position + 1 < max && !visited[position + 1]) {
            queue.push([position + 1, time + 1]);
            visited[position + 1] = true;
        }
        if (position === K) {
            return time;
        }
    }
};

if (N >= K) {
    console.log(N - K);
} else {
    console.log(bfs(N));
}
