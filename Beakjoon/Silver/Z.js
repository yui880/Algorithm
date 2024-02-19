// 1074
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Silver/test.txt";
let input = fs.readFileSync(filePath).toString().trim();

const [N, R, C] = input.split(" ").map(Number);

const recursion = (n, r, c) => {
    if (n === 0) return 0;
    const half = 1 << (n - 1);

    if (r < half && c < half) return recursion(n - 1, r, c);
    if (r < half && c >= half) return half * half + recursion(n - 1, r, c - half);
    if (r >= half && c < half) return 2 * half * half + recursion(n - 1, r - half, c);
    if (r >= half && c >= half) return 3 * half * half + recursion(n - 1, r - half, c - half);
};

console.log(recursion(N, R, C));
