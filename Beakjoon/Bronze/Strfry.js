// 11328
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Bronze/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = parseInt(input.shift(), 10);
for (let i = 0; i < N; i++) {
    const [first, second] = input.shift().split(" ");
    if ([...first].sort().join("") === [...second].sort().join("")) {
        console.log("Possible");
    } else {
        console.log("Impossible");
    }
}
