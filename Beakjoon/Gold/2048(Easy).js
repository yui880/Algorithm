// 18808
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input.shift());
const board = input.map((str) => str.split(" ").map(Number));
const movedBoard = Array.from({ length: N }, () => new Array(N));

const arr = new Array(5);
let max = 0;

const getOrder = (count) => {
    if (count === 5) {
        move();
        return;
    }

    for (let i = 0; i < 4; i++) {
        arr[count] = i;
        getOrder(count + 1);
    }
};

const move = () => {
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            movedBoard[i][j] = board[i][j];
        }
    }

    for (let i = 0; i < 5; i++) {
        const dir = arr[i];

        if (dir === 0) moveTop();
        else if (dir === 1) moveDown();
        else if (dir === 2) moveLeft();
        else moveRight();
    }

    checkMax();
};

const checkMax = () => {
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            if (max < movedBoard[i][j]) max = movedBoard[i][j];
        }
    }
};

const moveTop = () => {
    for (let j = 0; j < N; j++) {
        const col = [];
        for (let i = 0; i < N; i++) {
            if (movedBoard[i][j] !== 0) col.push(movedBoard[i][j]);
        }

        if (col.length === 0) continue;

        const stack = [col[0]];
        let newCol = [];

        for (let k = 1; k < col.length; k++) {
            const val = col[k];

            if (stack[stack.length - 1] === val) {
                stack.pop();
                newCol.push(val * 2);
            } else if (stack.length === 0) {
                stack.push(val);
            } else {
                newCol.push(stack.pop());
                stack.push(val);
            }
        }
        newCol = [...newCol, ...stack];

        for (let i = 0; i < N; i++) {
            if (newCol.length > i) {
                movedBoard[i][j] = newCol[i];
            } else {
                movedBoard[i][j] = 0;
            }
        }
    }
};

const moveDown = () => {
    for (let j = 0; j < N; j++) {
        const col = [];
        for (let i = N - 1; i >= 0; i--) {
            if (movedBoard[i][j] !== 0) col.push(movedBoard[i][j]);
        }

        if (col.length === 0) continue;

        const stack = [col[0]];
        let newCol = [];
        for (let k = 1; k < col.length; k++) {
            const val = col[k];

            if (stack[stack.length - 1] === val) {
                stack.pop();
                newCol.push(val * 2);
            } else if (stack.length === 0) {
                stack.push(val);
            } else {
                newCol.push(stack.pop());
                stack.push(val);
            }
        }

        newCol = [...newCol, ...stack].reverse();

        for (let i = N - 1; i >= 0; i--) {
            if (newCol.length) {
                movedBoard[i][j] = newCol.pop();
            } else {
                movedBoard[i][j] = 0;
            }
        }
    }
};

const moveRight = () => {
    for (let i = 0; i < N; i++) {
        const row = [];
        for (let j = N - 1; j >= 0; j--) {
            if (movedBoard[i][j] !== 0) row.push(movedBoard[i][j]);
        }

        if (row.length === 0) continue;

        const stack = [row[0]];
        let newCol = [];
        for (let k = 1; k < row.length; k++) {
            const val = row[k];

            if (stack[stack.length - 1] === val) {
                stack.pop();
                newCol.push(val * 2);
            } else if (stack.length === 0) {
                stack.push(val);
            } else {
                newCol.push(stack.pop());
                stack.push(val);
            }
        }
        newCol = [...newCol, ...stack].reverse();

        for (let j = N - 1; j >= 0; j--) {
            if (newCol.length) {
                movedBoard[i][j] = newCol.pop();
            } else {
                movedBoard[i][j] = 0;
            }
        }
    }
};

const moveLeft = () => {
    for (let i = 0; i < N; i++) {
        const row = [];
        for (let j = 0; j < N; j++) {
            if (movedBoard[i][j] !== 0) row.push(movedBoard[i][j]);
        }

        if (row.length === 0) continue;

        const stack = [row[0]];
        let newCol = [];
        for (let k = 1; k < row.length; k++) {
            const val = row[k];

            if (stack[stack.length - 1] === val) {
                stack.pop();
                newCol.push(val * 2);
            } else if (stack.length === 0) {
                stack.push(val);
            } else {
                newCol.push(stack.pop());
                stack.push(val);
            }
        }
        newCol = [...newCol, ...stack];

        for (let j = N - 1; j >= 0; j--) {
            if (newCol.length > j) {
                movedBoard[i][j] = newCol[j];
            } else {
                movedBoard[i][j] = 0;
            }
        }
    }
};

getOrder(0);
console.log(max);

// moveTop();
// console.log(movedBoard);
