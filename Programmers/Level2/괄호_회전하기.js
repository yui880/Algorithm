function solution(s) {
    const str = s.repeat(2);
    let start = 0;
    let end = s.length;
    let count = 0;
    
    while(end !== str.length-1){
        let cur = str.slice(start, end);
        if(isCorrect(cur)) count++;
        start++; end++;
    }
    return count;
    
}

function isCorrect(s){
    if(s[0] === '}' || s[0] === ')' || s[0] === ']') return false;
    while(true){
        let temp = s.replace(/(\[\])|(\(\))|({})/g,'');
        if(temp === s) break;
        s = temp;
    }
    return s.length === 0 ? true : false;
    
}

// 스택 사용해서 푼 코드 

function solution(s) {
    if(s.length % 2 !== 0) return 0;
    
    const str = s.repeat(2);
    let start = 0;
    let end = s.length;
    let answer = 0;
    
    while(end !== str.length){
        const rotated = str.slice(start, end);
        let stack = [];
        let isRight = true;
        
        for(let char of rotated){
            if(char[0] === '(' || char[0] === '{' || char[0] === '['){
                stack.push(char);
            } else {
                const stackChar = stack.pop();
                if(stackChar === '(' && char === ')') continue;
                if(stackChar === '{' && char === '}') continue;
                if(stackChar === '[' && char === ']') continue;
                isRight = false;
                break;
            }
        }
        if(isRight) answer++;
        start++; end++;
    }
    return answer;
}
