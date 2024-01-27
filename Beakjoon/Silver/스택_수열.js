// 1874
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Silver/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);

const N = Number(input.shift());
const targets = input.map(Number);

const before = Array.from({ length: N }, (_, i) => i + 1).reverse();
const after = [];
let visited = new Array(N + 1).fill(false);

const commands = [];

let flag = true;

for (const num of targets) {
    while (!visited[num]) {
        const temp = before.pop();
        after.push(temp);
        commands.push("+");
        visited[temp] = true;
    }

    if (visited[num]) {
        const temp = after.pop();
        if (temp !== num) {
            flag = false;
            break;
        } else {
            commands.push("-");
        }
    }
}

console.log(flag ? commands.join("\n") : "NO");

// 1874
// const fs = require("fs");
// const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Silver/test.txt";
// let input = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);

// const N = Number(input.shift());
// const targets = input.map(Number);

// let current = 1;
// const stack = [];
// const commands = [];
// let flag = true;

for (const num of targets) {
    while (num >= current) {
        stack.push(current++);
        commands.push("+");
    }

    const popped = stack.pop();
    commands.push("-");

    if (popped !== num) {
        flag = false;
        break;
    }
}

console.log(flag ? commands.join("\n") : "NO");
