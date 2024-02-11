// 20055
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, K] = input[0].split(" ").map(Number);
let belt = input[1].split(" ").map(Number);
let robots = new Array(N).fill(false);

let idx = 0;
while (true) {
    idx++;

    belt.unshift(belt.pop());
    robots.unshift(false);
    robots.pop();

    if (robots[N - 1]) robots[N - 1] = false;

    for (let i = N - 1; i >= 0; i--) {
        if (robots[i]) {
            const next = i + 1;
            if (belt[next] > 0 && !robots[next]) {
                belt[next]--;
                robots[next] = true;
                robots[i] = false;
            }
        }
    }

    if (robots[N - 1]) robots[N - 1] = false;

    if (belt[0] > 0) {
        robots[0] = true;
        belt[0] -= 1;
    }

    if (belt.filter((b) => b === 0).length >= K) break;
}

console.log(idx);

// const robots = []

// let idx = 0;
// while (true) {
//     idx++;

//     belt.unshift(belt.pop());

//     robots = robots.map((r) => {
//         let temp = (r + 1) % (2 * N);
//         if (temp === N - 1) return;
//         return temp;
//     });

//     robots = robots.map((r) => {
//         const next = (r + 1) % (2 * N);
//         if (belt[next] > 0 && !robots.includes(next)) {
//             belt[next] -= 1;
//             if (next === N - 1) return;
//             return next;
//         }
//         return r;
//     });

//     if (belt[0] > 0 && !robots.includes(0)) {
//         robots.push(0);
//         belt[0] -= 1;
//     }

//     if (belt.filter((b) => b === 0).length >= K) break;
// }

// console.log(idx);
