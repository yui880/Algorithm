// 18808
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M, K] = input.shift().split(" ").map(Number);
const stickers = [];
for (let i = 0; i < K; i++) {
    const [r, _] = input.shift().split(" ").map(Number);
    const temp = [];
    for (let j = 0; j < r; j++) {
        temp.push(input.shift().split(" ").map(Number));
    }
    stickers.push(temp);
}

const computer = Array.from({ length: N }, () => new Array(M).fill(false));

// 1. 가장 왼쪽 위에 붙이기
// 2. 붙일 공간이 없다면 90도 회전하고 반복
// 3. 노트북에 몇 개의 칸이 채워졌는지 확인하기

const putSticker = (sticker) => {
    const row = sticker.length;
    const col = sticker[0].length;

    for (let i = 0; i <= N - row; i++) {
        for (let j = 0; j <= M - col; j++) {
            let flag = false;
            for (let x = i; x < i + row; x++) {
                for (let y = j; y < j + col; y++) {
                    if (sticker[x - i][y - j] === 1 && computer[x][y]) {
                        flag = true;
                        break;
                    }
                }
                if (flag) break;
            }

            if (!flag) {
                for (let x = i; x < i + row; x++) {
                    for (let y = j; y < j + col; y++) {
                        if (!computer[x][y] && sticker[x - i][y - j] === 1) {
                            computer[x][y] = true;
                        }
                    }
                }
                return true;
            }
        }
    }

    return false;
};

const rotate = (sticker, count) => {
    const row = sticker.length;
    const col = sticker[0].length;

    count %= 4;
    if (count === 0) return sticker;

    const rotated = [];
    const rc = count % 2 === 0 ? [row, col] : [col, row];

    for (let i = 0; i < rc[0]; i++) {
        rotated[i] = new Array(rc[1]);
        for (let j = 0; j < rc[1]; j++) {
            if (count === 1) rotated[i][j] = sticker[row - j - 1][i];
            else if (count === 2) rotated[i][j] = sticker[row - i - 1][col - j - 1];
            else rotated[i][j] = sticker[j][col - i - 1];
        }
    }

    return rotated;
};

for (let i = 0; i < K; i++) {
    const sticker = stickers[i];

    for (let j = 0; j < 4; j++) {
        const tempSticker = rotate(sticker, j);
        const isAttacted = putSticker(tempSticker);
        if (isAttacted) break;
    }
}

let answer = 0;
for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
        if (computer[i][j]) answer++;
    }
}

console.log(answer);
