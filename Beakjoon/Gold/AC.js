// 5430
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input[0]);

for (let i = 1; i <= N * 3; i += 3) {
    const commands = input[i].split("");
    const n = Number(input[i + 1]);
    const temp = input[i + 2].slice(1, -1);
    const list = temp === "" ? [] : temp.split(",").map(Number);

    let front = 0;
    let back = list.length - 1;
    let flag = true;
    let isError = false;

    for (let j = 0; j < commands.length; j++) {
        if (commands[j] === "R") {
            let temp = front;
            front = back;
            back = temp;
            flag = !flag;
        }

        if (commands[j] === "D") {
            if (flag) {
                front++;
            } else {
                front--;
            }
        }

        if (flag && front - 1 > back) {
            isError = true;
            break;
        }

        if (!flag && front < back - 1) {
            isError = true;
            break;
        }
    }

    if (isError) {
        console.log("error");
    } else {
        let answer = [];
        if (list.length) {
            if (flag) {
                for (let k = front; k <= back; k++) {
                    answer.push(list[k]);
                }
            }
            if (!flag) {
                for (let k = front; k >= back; k--) {
                    answer.push(list[k]);
                }
            }
        }

        console.log(`[${answer.join(",")}]`);
    }
}
