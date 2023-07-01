// 시간초과

const twice = ['aa', 'bb', 'cc', 'dd', 'ee', 'ff', 'gg', 'hh', 'ii', 'jj', 'kk', 'll', 'mm', 'nn', 'oo', 'pp','qq', 'rr', 'ss', 'tt', 'uu', 'vv', 'ww', 'xx', 'yy', 'zz']

function solution(s){
    if(s.length % 2 !== 0) return 0;
    let len = s.length;
    while(len--){
        for(let i=0;i<twice.length; i++){
            s = s.replace(twice[i],'');
            if(s.length === 0) return 1;
        }
        if(s.length === 0) return 1;
    }
    return 0;  
}

// solve

function solution(s){
    let stack = [];
    
    for(let i=0;i<s.length;i++){
        if(stack[stack.length-1] === s[i]){
            stack.pop();
        }else {
            stack.push(s[i]);
        }
    }
    return stack.length ? 0 : 1;
}