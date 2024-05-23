// 1062
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Gold/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, K] = input.shift().split(" ").map(Number);
const words = input.map((word) => word.split(""));
let max = 0;

const alphabet = new Array(26).fill(false);

["a", "n", "t", "i", "c"].forEach((ch) => {
    alphabet[ch.charCodeAt(0) - 97] = true;
});

const check = () => {
    let cnt = 0;

    words.forEach((word) => {
        let flag = true;
        word.forEach((w) => {
            const num = w.charCodeAt(0) - 97;
            if (alphabet[num] === false) flag = false;
        });
        if (flag === true) cnt++;
    });

    return cnt;
};

const combination = (idx, count) => {
    if (count === K - 5) {
        const temp = check();
        if (temp > max) max = temp;
        return;
    }

    for (let i = idx; i < 26; i++) {
        if (alphabet[i] === true) continue;
        alphabet[i] = true;
        combination(i + 1, count + 1);
        alphabet[i] = false;
    }
};

if (K < 5) console.log(0);
else {
    combination(0, 0);
    console.log(max);
}
