// 14889
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Silver/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input.shift());
const list = input.map((str) => str.split(" ").map(Number));

let arr = new Array(N / 2);

const scores = [];

const pickTeam = (at, count) => {
    if (count === N / 2) {
        let temp = 0;
        for (let i = 0; i < N / 2; i++) {
            for (let j = i + 1; j < N / 2; j++) {
                const x = arr[i];
                const y = arr[j];
                temp += list[x][y] + list[y][x];
            }
        }
        scores.push(temp);

        return;
    }

    for (let i = at; i < N; i++) {
        arr[count] = i;
        pickTeam(i + 1, count + 1);
    }
};

pickTeam(0, 0);

let answer = [];
for (let i = 0; i < scores.length / 2; i++) {
    const temp = scores[i] - scores[scores.length - i - 1];
    answer.push(Math.abs(temp));
}

console.log(Math.min(...answer));
