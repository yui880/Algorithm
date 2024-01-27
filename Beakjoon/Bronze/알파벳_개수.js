// 10808
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Bronze/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const str = input.shift().split("");
const alphabet = Array.from({ length: 26 }, (v, i) => String.fromCharCode(i + 97));

const list = [];
alphabet.forEach((a) => {
    list.push(str.filter((s) => s == a).length);
});

console.log(list.join(" "));
