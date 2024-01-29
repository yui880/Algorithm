// 1629
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Silver/test.txt";
let input = fs.readFileSync(filePath).toString().trim();
let [A, B, C] = input.split(" ").map(Number);

// a^n * a^n = a^2n
// a^b/2 * a^b/2 = a^b -> 이 방식 이용하기

const pow = (a, b, c) => {
    a = BigInt(a);
    c = BigInt(c);
    if (b === 1) return a % c;
    let val = pow(a, Math.floor(b / 2), c);
    val = (val * val) % c; // 더 작게 쪼갠 값을 통해 더 큰 값 구하기
    if (b % 2 === 0) return val; // 짝수면 그대로
    return (val * a) % c; // 홀수면 한번 더 곱해주기
};

console.log(pow(A, B, C).toString());
