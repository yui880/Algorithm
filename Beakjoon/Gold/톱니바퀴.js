// 15683
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const gears = [];
for (let i = 0; i < 4; i++) {
    gears.push(input.shift().split(""));
}

const K = Number(input.shift());
const turns = input.map((val) => val.split(" ").map(Number));

const clockwise = (num, visited) => {
    const first = gears[num][2];
    const second = gears[num][6];

    visited[num] = true;
    gears[num].unshift(gears[num].pop());
    if (num !== 3 && !visited[num + 1] && first !== gears[num + 1][6]) {
        counterclockwise(num + 1, visited);
    }

    if (num !== 0 && !visited[num - 1] && second !== gears[num - 1][2]) {
        counterclockwise(num - 1, visited);
    }
};

const counterclockwise = (num, visited) => {
    const first = gears[num][2];
    const second = gears[num][6];

    visited[num] = true;
    gears[num].push(gears[num].shift());
    if (num !== 3 && !visited[num + 1] && first !== gears[num + 1][6]) {
        clockwise(num + 1, visited);
    }

    if (num !== 0 && !visited[num - 1] && second !== gears[num - 1][2]) {
        clockwise(num - 1, visited);
    }
};

for (let i = 0; i < turns.length; i++) {
    const [num, d] = turns[i];
    let visited = new Array(4).fill(false);
    if (d === 1) {
        clockwise(num - 1, visited);
    } else {
        counterclockwise(num - 1, visited);
    }
}

const score = [1, 2, 4, 8];
let answer = 0;
for (let i = 0; i < 4; i++) {
    if (gears[i][0] === "1") answer += score[i];
}

console.log(answer);
