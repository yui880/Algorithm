let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');
// 
// Beakjoon/Bronze/test.txt
let num = Number(input);

function solution(num){
    if(num % 4 === 0 && (num % 100 !== 0 || num % 400 === 0)){
        console.log(1);
    } else {
        console.log(0);
    }
}

solution(num);