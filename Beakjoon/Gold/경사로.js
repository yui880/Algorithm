// 14890
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

// 가로 세로 모두 확인하기
// (1) 이전 수를 저장하고, 이전 수랑 같은지 확인
// (2) 같지 않으면 경사로를 둘 수 있는지 확인 -> 같으면 계속 확인, 아니면 바로 탐색 끝내기

const [N, L] = input.shift().split(" ").map(Number);
const board = input.map((str) => str.split(" ").map(Number));

let answer = 0;

let prev = 0;
for (let i = 0; i < N; i++) {
    const visited = new Array(N).fill(false);
    let flag = true;
    prev = board[i][0];

    for (let j = 1; j < N; j++) {
        if (board[i][j] === prev) continue;
        else if (board[i][j] === prev - 1) {
            let isOk = true;

            if (j + L - 1 > N) {
                flag = false;
                break;
            }

            for (let k = j; k < j + L; k++) {
                if (board[i][k] !== prev - 1 || visited[k]) isOk = false;
            }

            if (isOk) {
                for (let k = j; k < j + L; k++) {
                    visited[k] = true;
                }
            } else {
                flag = false;
            }

            prev = board[i][j];
            j += L - 1;
        } else if (board[i][j] === prev + 1) {
            let isOk = true;

            if (j - L < 0) {
                flag = false;
                break;
            }

            for (let k = j - 1; k >= j - L; k--) {
                if (board[i][k] !== prev || visited[k]) {
                    isOk = false;
                }
            }

            if (isOk) {
                for (let k = j - 1; k >= j - L; k--) {
                    visited[k] = true;
                }
            } else {
                flag = false;
            }

            prev = board[i][j];
        } else {
            flag = false;
            break;
        }
    }

    if (flag) {
        answer++;
    }
}

for (let j = 0; j < N; j++) {
    const visited = new Array(N).fill(false);
    let flag = true;
    prev = board[0][j];

    for (let i = 1; i < N; i++) {
        if (board[i][j] === prev) continue;
        else if (board[i][j] === prev - 1) {
            let isOk = true;

            if (i + L - 1 >= N) {
                flag = false;
                break;
            }

            for (let k = i; k < i + L; k++) {
                if (board[k][j] !== prev - 1 || visited[k]) isOk = false;
            }

            if (isOk) {
                for (let k = i; k < i + L; k++) {
                    visited[k] = true;
                }
            } else {
                flag = false;
            }

            prev = board[i][j];
            i += L - 1;
        } else if (board[i][j] === prev + 1) {
            let isOk = true;

            if (i - L < 0) {
                flag = false;
                break;
            }

            for (let k = i - 1; k >= i - L; k--) {
                if (board[k][j] !== prev || visited[k]) {
                    isOk = false;
                }
            }

            if (isOk) {
                for (let k = i - 1; k >= i - L; k--) {
                    visited[k] = true;
                }
            } else {
                flag = false;
            }

            prev = board[i][j];
        } else {
            flag = false;
            break;
        }
    }

    if (flag) {
        answer++;
    }
}

console.log(answer);
