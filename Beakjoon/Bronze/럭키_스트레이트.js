// 18406 

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();

function solution(input){
    const len = input.toString().length / 2;
    let left = input.toString().slice(0,len);
    let right = input.toString().slice(len);
   

    const leftSum = [...left].reduce((acc, cur) => acc + parseInt(cur, 10), 0);
    const rightSum = [...right].reduce((acc, cur) => acc + parseInt(cur, 10), 0);


    if(leftSum === rightSum) console.log('LUCKY') ;
    else console.log('READY');
}

function solution(input){
    let sum = [0, 0];
    const len = input.toString().length / 2;
    for(let i=0;i<len;i++){
        sum[0] += +input[i];
    }
    for(let i=len;i<input.length;i++){
        sum[1] += +input[i];
    }
    console.log(sum[0] === sum[1] ? 'LUCKY' : 'READY');
}


solution(input);

// console.log(solution(123402));
// console.log(solution(7755));