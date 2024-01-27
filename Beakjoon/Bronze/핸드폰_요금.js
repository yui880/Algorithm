// 10093
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Bronze/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = parseInt(input.shift(), 10);
const call = input.shift().split(" ").map(Number);

const youngsik = call.reduce((sum, cur) => {
    return sum + Math.ceil((cur + 1) / 30) * 10;
}, 0);

const minsik = call.reduce((sum, cur) => {
    return sum + Math.ceil((cur + 1) / 60) * 15;
}, 0);

if (youngsik > minsik) {
    console.log("M", minsik);
} else if (youngsik < minsik) {
    console.log("Y", youngsik);
} else {
    console.log("Y M", youngsik);
}
