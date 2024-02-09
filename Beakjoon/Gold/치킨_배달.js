// 15686
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input.shift().split(" ").map(Number);

const chickens = [];
const board = input.map((row, i) => {
    const temp = row.split(" ");
    temp.forEach((val, j) => {
        if (val === "2") {
            chickens.push([i, j]);
        }
    });
    return temp;
});

const arr = new Array(M);
const combi = [];
const pickChicken = (at, count) => {
    if (count === M) {
        combi.push([...arr]);
        return;
    }

    for (let i = at; i < chickens.length; i++) {
        arr[count] = i;
        pickChicken(i + 1, count + 1);
    }
};

const getDistance = (x, y, stores) => {
    let min = Infinity;
    stores.forEach(([i, j]) => {
        const distance = Math.abs(x - i) + Math.abs(y - j);
        if (min > distance) min = distance;
    });

    return min;
};

pickChicken(0, 0);

let answer = Infinity;
for (let k = 0; k < combi.length; k++) {
    const current = combi[k].map((val) => chickens[val]);

    let temp = 0;
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            if (board[i][j] === "1") {
                temp += getDistance(i, j, current);
            }
        }
    }
    answer = Math.min(answer, temp);
}

console.log(answer);
