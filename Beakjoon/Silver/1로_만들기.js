// 1463
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'Beakjoon/Silver/test.txt';
let input = fs.readFileSync(filePath).toString().trim();

const dpTable = new Array(10^6).fill(0);

const makeItOne = (num) => {
    dpTable[1] = 0;

    for(let i=2;i<=num;i++){
        dpTable[i] = dpTable[i-1] + 1;

        if(i % 2 === 0){
            dpTable[i] = Math.min(dpTable[i], dpTable[i/2]+1);
        }
        if(i % 3 === 0){
            dpTable[i] = Math.min(dpTable[i], dpTable[i/3]+1);
        }
    }
    return dpTable[num];
}

console.log(makeItOne(input)); 