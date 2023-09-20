// 5014

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Silver/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let [F, S, G, U, D] = input.pop().split(" ").map(Number);

const goToFloor = (index, stair) => {
    if (index === 0) return stair + U;
    if (index === 1) return stair - D;
};

const solution = () => {
    const visited = new Array(F + 1).fill(false);
    if (S === G) return 0;

    const bfs = (start) => {
        const queue = [];
        queue.push([start, 0]);
        visited[start] = true;

        let idx = 0;
        while (queue.length > idx) {
            const [stair, count] = queue[idx++];
            for (let i = 0; i < 2; i++) {
                const nextStair = goToFloor(i, stair);
                if (!visited[nextStair] && nextStair <= F && nextStair >= 1) {
                    visited[nextStair] = true;
                    queue.push([nextStair, count + 1]);
                }
                if (nextStair === G) {
                    return count + 1;
                }
            }
        }
        return "use the stairs";
    };
    return bfs(S);
};

console.log(solution());
