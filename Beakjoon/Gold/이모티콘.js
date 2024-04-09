// 14226
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim();

const N = Number(input);

// 1. 전체 복사 (일부만 복사하기 불가능)
// 2. 모두 붙여넣기(클립보드에 이모티콘이 있는 경우에만)
// 3. 화면에 있는 이모티콘 중 하나 삭제하기

// 목표 : 이모티콘 1개를 S개로 만드는 방법

const visited = Array.from({ length: N + 1 }, () => new Array(N + 1).fill(false));

const bfs = () => {
    const queue = [];
    queue.push([1, 0, 0]); // 개수, 시간, 클립보드

    let idx = 0;
    while (queue.length > idx) {
        const [count, time, clipboard] = queue[idx++];

        if (count <= 0 || count > N) continue;

        if (!visited[count][count]) {
            queue.push([count, time + 1, count]);
            visited[count][count] = true;
        }

        if (clipboard !== 0 && count + clipboard <= N && !visited[count + clipboard][clipboard]) {
            queue.push([count + clipboard, time + 1, clipboard]);
            visited[count + clipboard][clipboard] = true;

            if (count + clipboard === N) return time + 1;
        }

        if (!visited[count - 1][clipboard]) {
            queue.push([count - 1, time + 1, clipboard]);
            visited[count - 1][clipboard] = true;

            if (count - 1 === N) return time + 1;
        }
    }
};

console.log(bfs());
