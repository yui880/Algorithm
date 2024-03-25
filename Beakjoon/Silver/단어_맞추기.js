// 9081
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "Beakjoon/Silver/test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input.shift());
const words = input.map((str) => str.split(""));

const nextPermutation = (arr) => {
    let i = arr.length - 2;
    while (i >= 0 && arr[i] >= arr[i + 1]) {
        i--;
    }

    const pivot = i;
    if (pivot < 0) return arr;

    let j = arr.length - 1;
    while (j > pivot && arr[j] <= arr[pivot]) {
        j--;
    }

    let temp = arr[pivot];
    arr[pivot] = arr[j];
    arr[j] = temp;

    const next = [...arr.slice(0, pivot + 1), ...arr.slice(pivot + 1).reverse()];
    return next;
};

words.forEach((word) => {
    const next = nextPermutation(word);
    console.log(next.join(""));
});
