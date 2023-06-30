// 효율성 테스트에서 시간초과 

function solution(s){
    if(s.length % 2 !== 0) return false;
    let limit = s.length/2;
    for(let i=0;i<limit;i++){
        s = s.replace(/\(\)/g,"");
        if(s.length === 0) return true;
    }
    return false;
}

// 통과
function solution(s){
    if(s.length % 2 !== 0) return false;
    if(s[0] === ')') return false;
    // if(s[0] === '(' && s[s.length-1] !== ')') return false;
    // if(s.replace(/\(/,"").length !== s.replace(/\)/,"").length) return false;
    
    let checkSum = 0;
    for(let bracket of s){
        if(bracket === '(') checkSum++;
        else {
            checkSum--;
        }
        if(checkSum < 0) return false;
    }
    if(checkSum != 0) return false;
    return true;
}