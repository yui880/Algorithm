function solution(s) {
    let str = s.split(" ");
    let newStr = ''
    for(let i=0;i<str.length;i++){
        let temp = '';
        [...str[i]].map((num, i) => {
            if(i%2 ==0) temp += num.toUpperCase();
            else temp += num.toLowerCase();
        })
        newStr += temp;
        if(i === str.length-1) continue;
        newStr += " ";
        
    }
    return newStr;
}