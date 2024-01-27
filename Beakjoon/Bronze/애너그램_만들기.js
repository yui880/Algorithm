// 1919
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Bronze/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const firstCount = new Array(26).fill(0);
const secondCount = new Array(26).fill(0);

const count = (str, arr) => {
    [...str].forEach((c) => {
        const idx = c.charCodeAt(0) - 97;
        arr[idx]++;
    });
};

count(input.shift(), firstCount);
count(input.shift(), secondCount);

let difference = 0;
for (let i = 0; i < 26; i++) {
    difference += Math.abs(firstCount[i] - secondCount[i]);
}

console.log(difference);
