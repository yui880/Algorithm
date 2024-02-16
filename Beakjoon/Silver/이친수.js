//1932
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Silver/test.txt";
let input = fs.readFileSync(filePath).toString().trim();

const N = Number(input);
const last = Array.from({ length: N + 2 }, () => new Array(2));

last[1][0] = 0;
last[1][1] = 1;
last[2][0] = 1;
last[2][1] = 0;

for (let i = 3; i <= N; i++) {
    last[i][0] = BigInt(last[i - 1][0]) + BigInt(last[i - 1][1]);
    last[i][1] = BigInt(last[i - 1][0]);
}

console.log(String(last[N][0] + last[N][1]));
