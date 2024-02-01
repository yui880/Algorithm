// 15649
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Silver/test.txt";
const input = fs.readFileSync(filePath).toString().trim();

const [N, M] = input.split(" ").map(Number);

const arr = new Array(M);
const isused = new Array(N + 1).fill(false);

const backTracking = (k) => {
    if (k === M) {
        console.log(`${arr.join(" ")}`);
        return;
    }

    for (let i = 1; i <= N; i++) {
        if (!isused[i]) {
            arr[k] = i;
            isused[i] = true;
            backTracking(k + 1);
            isused[i] = false;
        }
    }
};

backTracking(0);
