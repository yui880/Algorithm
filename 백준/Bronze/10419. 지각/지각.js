const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const num = parseInt(input[0]);
const results = [];

for (let i = 0; i < num; i++) {
    const time = parseInt(input[i + 1]);
    
    const tMax = (-1 + Math.sqrt(1 + 4 * time)) / 2;
    const maxT = Math.floor(tMax);
    
    results.push(maxT);
}

console.log(results.join("\n"));