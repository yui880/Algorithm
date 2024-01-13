// bfs

function solution(x, y, n) {
    const visited = new Array(y + 1).fill(false);
    const queue = [];

    queue.push([x, 0]);
    visited[x] = true;

    let idx = 0;
    while (queue.length > idx) {
        const [val, count] = queue[idx++];
        visited[val] = true;

        if (val === y) return count;

        if (val + n <= y && !visited[val + n]) {
            queue.push([val + n, count + 1]);
            visited[val + n] = true;
        }
        if (val * 2 <= y && !visited[val * 2]) {
            queue.push([val * 2, count + 1]);
            visited[val * 2] = true;
        }
        if (val * 3 <= y && !visited[val * 3]) {
            queue.push([val * 3, count + 1]);
            visited[val * 3] = true;
        }
    }

    return -1;
}

// dp
function solution(x, y, n) {
    const dpTable = new Array(y + 1).fill(Infinity);
    dpTable[x] = 0;

    for (let i = x; i <= y; i++) {
        if (dpTable[i] === Infinity) continue;

        if (i + n <= y) {
            dpTable[i + n] = Math.min(dpTable[i + n], dpTable[i] + 1);
        }
        if (i * 2 <= y) {
            dpTable[i * 2] = Math.min(dpTable[i * 2], dpTable[i] + 1);
        }
        if (i * 3 <= y) {
            dpTable[i * 3] = Math.min(dpTable[i * 3], dpTable[i] + 1);
        }
    }

    return dpTable[y] !== Infinity ? dpTable[y] : -1;
}
