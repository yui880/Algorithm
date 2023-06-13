let fs = require('fs');
const input = require('fs').readFileSync('Beakjoon/Bronze/test.txt').toString().trim().split('\n');

// /dev/stdin
// Beakjoon/Bronze/test.txt

function solution(input){
    let arr = new Array(31).fill(0);
    for(let i=0; i<=input.length; i++){
        arr[input[i]] = 1;
    }
    let answer = [];
    arr.reduce((_, cur, i)=>{
        if(cur === 0 && i !== 0) return answer.push(i);
    },[])
    console.log(answer[0]);
    console.log(answer[1]);

}

solution(input)