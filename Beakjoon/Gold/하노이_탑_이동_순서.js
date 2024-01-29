// 11729
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim();
const k = Number(input);
const route = [];

const hanoi = (start, end, n) => {
    if (n === 1) {
        route.push(`${start} ${end}`);
        return;
    }

    hanoi(start, 6 - start - end, n - 1);
    route.push(`${start} ${end}`);
    hanoi(6 - start - end, end, n - 1);
};

hanoi(1, 3, k);
console.log(2 ** k - 1);
console.log(route.join("\n"));
