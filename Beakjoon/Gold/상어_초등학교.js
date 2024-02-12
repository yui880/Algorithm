// 21608
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input.shift());
const list = input.map((str) => str.split(" ").map(Number));

// 1. 비어있는 칸 중 좋아하는 학생이 가장 많이 인접한 칸을 저장
// 2. 인접한 칸 중에서 비어있는 칸이 가장 많은 칸으로 자리를 저장
// 3. 행의 번호가 가장 작은 칸, 열의 번호가 가장 작은 칸으로 자리를 정함

const board = Array.from({ length: N }, () => new Array(N).fill(0));

const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

for (let i = 0; i < N ** 2; i++) {
    const [student, ...likes] = list[i];
    let [likeCount, emptyCount, row, col] = new Array(4).fill(-1);

    for (let x = 0; x < N; x++) {
        for (let y = 0; y < N; y++) {
            if (board[x][y] !== 0) continue;

            let tempLikeCount = 0;
            let tempEmptyCount = 0;

            for (let l = 0; l < 4; l++) {
                const nx = x + dx[l];
                const ny = y + dy[l];

                if (nx < 0 || nx >= N || ny < 0 || ny >= N) continue;
                if (likes.includes(board[nx][ny])) tempLikeCount++;
                if (board[nx][ny] === 0) tempEmptyCount++;
            }

            if (tempLikeCount > likeCount) {
                likeCount = tempLikeCount;
                emptyCount = tempEmptyCount;
                row = x;
                col = y;
            } else if (tempLikeCount === likeCount) {
                if (tempEmptyCount > emptyCount) {
                    likeCount = tempLikeCount;
                    emptyCount = tempEmptyCount;
                    row = x;
                    col = y;
                }
            }
        }
    }
    board[row][col] = student;
}

const scores = [0, 1, 10, 100, 1000];
let answer = 0;

for (let x = 0; x < N; x++) {
    for (let y = 0; y < N; y++) {
        let tempScore = 0;
        const studentInfo = list.find((val) => val[0] === board[x][y]);
        const likes = studentInfo ? studentInfo.slice(1) : [];

        for (let i = 0; i < 4; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];

            if (nx < 0 || nx >= N || ny < 0 || ny >= N) continue;
            if (likes.includes(board[nx][ny])) {
                tempScore++;
            }
        }

        answer += scores[tempScore];
    }
}

console.log(answer);
