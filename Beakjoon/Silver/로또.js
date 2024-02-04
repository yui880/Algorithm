// 6603
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Silver/test.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const LOTTO_COUNT = 6;

while (true) {
    const temp = input.shift();
    if (temp === "0") break;
    const [k, ...list] = temp.split(" ").map(Number);

    let arr = new Array(6).fill(0);
    let visited = new Array(list.length).fill(false);
    let answer = "";

    const backTraking = (at, count) => {
        if (count === LOTTO_COUNT) {
            answer += `${arr.join(" ")}\n`;
            return;
        }

        for (let i = at; i < k; i++) {
            if (!visited[i]) {
                arr[count] = list[i];
                visited[i] = true;
                backTraking(i + 1, count + 1);
                visited[i] = false;
            }
        }
    };

    backTraking(0, 0);
    console.log(answer);
}
