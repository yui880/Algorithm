// 10804
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Bronze/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const range = input.map((val) => val.split(" ").map(Number));

let numbers = Array.from(new Array(20), (x, i) => i + 1);
range.forEach(([s, e]) => {
    numbers = [...numbers.slice(0, s - 1), ...numbers.slice(s - 1, e).reverse(), ...numbers.slice(e)];
});
console.log(numbers.join(" "));
