function flip(str){
    let zero = 0;
    let one = 0;
    for(let i=1;i<str.length;i++){
        if(str[i-1] !== str[i]){
            if(str[i-1] === '0') zero++;
            else one++;
        }
    }
    return Math.max(zero, one);
}

console.log(flip('0001100')); // 1
console.log(flip('11111')); // 0
console.log(flip('00000001')); // 1
console.log(flip('11001100110011000001')); // 4
console.log(flip('11101101')); // 2


// 백준 제출용

let fs = require('fs');
const input = require('fs').readFileSync('/dev/stdin').toString();


function solution(input){
    let zero = 0;
    let one = 0;
    for(let i=1;i<input.length;i++){
        if(input[i-1] !== input[i]){
            if(input[i-1] === '0') zero++;
            else one++;
        }
    }
    console.log(Math.max(zero, one));
}
// /dev/stdin
// Beakjoon/Bronze/test.txt